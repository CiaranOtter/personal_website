// import type { PageServerLoad } from "./$types";

// export const load : PageServerLoad = async ({locals}) => {
//     const { data, error } = await locals.supabase.from('sections').select('*')

//     if (error) {
//         return {
//             error
//         }
//     }

//     return {
//         sections: data
//     }
// }

// type Section = {
//     id: number
//     name: string
//     start_date: Date
//     end_date: Date
//     href: string
//     content: string
//     created_at: Date
// }