// import {NextResponse} from "next/server";
//
//
// export async function POST(req: Request) {
//     try{
//         const { username, email, password } = req.json()
//
//         const response = fetch(`${process.env.API_URL}/api/auth/local/register`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 username,
//                 email,
//                 password,
//             })
//         })
//
//         if (response && response.ok) {
//             return NextResponse.json({
//                 status: 200,
//                 message: 'Регистрация прошла успешно',
//                 user: (await response.json()).user,
//             })
//         }
//     }
//
//     catch(err){
//
//     }
// }