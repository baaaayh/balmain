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
            link
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
            MAX(po.color) AS color,  -- 색상 단일 값
            ARRAY_AGG(DISTINCT i.image_filename) AS image_filenames  -- 이미지 배열
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
            MAX(po.color) AS color,  -- 색상 단일 값
            ARRAY_AGG(DISTINCT i.image_filename) AS image_filenames  -- 이미지 배열
        FROM products p
        LEFT JOIN images i ON p.item_code = i.product_id
        LEFT JOIN product_options po ON p.item_code = po.product_id
        WHERE p.category_id::text > $1::text
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
