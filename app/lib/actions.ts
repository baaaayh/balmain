"use server";
import pool from "@/app/lib/db";

export async function getMenuData() {
    const result = await pool.query(`
        SELECT 
            menu_id, 
            parent_menu_id, 
            depth1, 
            depth2, 
            depth3, 
            depth4, 
            depth_level, 
            path, 
            border,
            link,
            prev_path,
            prev_menu_id,
            prev_menu
        FROM menus
        ORDER BY depth_level, menu_id
    `);

    return result.rows;
}

export async function getProductsData(menuId: number) {
    const result = await pool.query(
        `
        SELECT 
            p.product_id, 
            p.base_item_code, 
            p.item_code, 
            p.name, 
            p.category1,
            p.category1_1,
            p.category1_3,
            p.category1_4,
            p.collections1,
            p.collections2,
            p.collections3,
            p.collections4,
            p.menu_id,
            p.category_id,
            p.price,
            p.image_alt,
            MAX(po.color) AS color,
            ARRAY_AGG(DISTINCT i.image_filename) AS image_filenames
        FROM products p
        LEFT JOIN images i ON p.item_code = i.product_id
        LEFT JOIN product_options po ON p.item_code = po.product_id
        WHERE p.menu_id = $1
        GROUP BY 
            p.product_id, 
            p.base_item_code, 
            p.item_code, 
            p.name, 
            p.category1,
            p.category1_1,
            p.category1_3,
            p.category1_4,
            p.collections1,
            p.collections2,
            p.collections3,
            p.collections4,
            p.menu_id,
            p.category_id,
            p.price,
            p.image_alt
        ORDER BY p.product_id
        `,
        [menuId]
    );

    return result.rows;
}

export async function getAllProductsData(menuId: number) {
    const result = await pool.query(
        `
        SELECT 
            p.product_id, 
            p.base_item_code, 
            p.item_code, 
            p.name, 
            p.category1,
            p.category1_1,
            p.category1_3,
            p.category1_4,
            p.collections1,
            p.collections2,
            p.collections3,
            p.collections4,
            p.menu_id,
            p.category_id,
            p.price,
            p.image_alt,
            MAX(po.color) AS color,
            ARRAY_AGG(DISTINCT i.image_filename) AS image_filenames
        FROM products p
        LEFT JOIN images i ON p.item_code = i.product_id
        LEFT JOIN product_options po ON p.item_code = po.product_id
        WHERE string_to_array(p.category_id, ',')::int[] @> string_to_array($1, ',')::int[]
        GROUP BY 
            p.product_id, 
            p.base_item_code, 
            p.item_code, 
            p.name, 
            p.category1,
            p.category1_1,
            p.category1_3,
            p.category1_4,
            p.collections1,
            p.collections2,
            p.collections3,
            p.collections4,
            p.menu_id,
            p.category_id,
            p.price,
            p.image_alt
        ORDER BY p.product_id
        `,
        [menuId.toString()]
    );

    return result.rows;
}

export async function getProductDetailData(productId: number) {
    try {
        const query = `
            SELECT 
                p.product_id, 
                p.base_item_code, 
                p.item_code, 
                p.name, 
                p.category1,
                p.category1_1,
                p.category1_3,
                p.category1_4,
                p.collections1,
                p.collections2,
                p.collections3,
                p.collections4,
                p.menu_id,
                p.category_id,
                p.price,
                p.image_alt,
                i.image_filename, 
                s.description AS sustainability_description,
                (
                    SELECT ARRAY_AGG(
                        DISTINCT jsonb_build_object(
                            'name', po.color, 
                            'id', pr.product_id
                        )
                    )
                    FROM product_options AS po
                    JOIN products AS pr ON po.product_id = pr.item_code
                    WHERE pr.base_item_code = p.base_item_code
                ) AS colors,
                (
                    SELECT ARRAY_AGG(DISTINCT po.size)
                    FROM product_options AS po
                    WHERE po.product_id IN (
                        SELECT item_code
                        FROM products
                        WHERE product_id = p.product_id
                    )
                ) AS sizes,
                iv.stock_quantity,
                d.contents AS description_contents
            FROM 
                products AS p
            LEFT JOIN 
                images AS i ON p.item_code = i.product_id
            LEFT JOIN 
                sustainability AS s ON p.item_code = s.product_id
            LEFT JOIN 
                inventory AS iv ON p.item_code = iv.product_id
            LEFT JOIN 
                description AS d ON p.item_code = d.item_code
            WHERE 
                p.product_id = $1
            GROUP BY 
                p.product_id, 
                p.base_item_code, 
                p.item_code, 
                p.name, 
                p.category1,
                p.category1_1,
                p.category1_3,
                p.category1_4,
                p.collections1,
                p.collections2,
                p.collections3,
                p.collections4,
                p.menu_id,
                p.category_id,
                p.price,
                p.image_alt,
                i.image_filename, 
                s.description,
                iv.stock_quantity,
                d.contents
        `;

        const result = await pool.query(query, [productId]);

        return result.rows[0] || null;
    } catch (error) {
        console.error("Error fetching product details info:", error);
        throw new Error("Failed to fetch product detail data.");
    }
}

export async function getParentMenuData(menuId: number) {
    const result = await pool.query(
        `
        SELECT 
            menu_id, 
            parent_menu_id, 
            depth1, 
            depth2, 
            depth3, 
            depth4, 
            depth_level, 
            path, 
            border,
            link
        FROM menus
        WHERE menu_id = $1
    `,
        [menuId]
    );

    return result.rows;
}
