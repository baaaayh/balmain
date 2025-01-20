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
