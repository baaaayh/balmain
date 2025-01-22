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
            product_id, 
            base_item_code, 
            item_code, 
            name, 
            category1,
            category1_1,
            category1_3,
            category1_4,
            collections1,
            collections2,
            collections3,
            collections4,
            menu_id,
            category_id,
            price,
            image_alt
        FROM products
        WHERE menu_id = $1
        ORDER BY product_id
        `,
        [menuId]
    );

    return result.rows[0];
}
