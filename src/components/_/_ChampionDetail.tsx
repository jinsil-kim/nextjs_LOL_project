// import { BASE_URL } from "@/constants/api";
// import { fetchChampionsDetail, fetchVersion } from "@/utils/serverApi";
// import React from "react";

// interface DetailProps {
//   key: string;
// }

// export default async function ChampionDetail({ key }: DetailProps) {
//   const championDetail = await fetchChampionsDetail(key);
//   console.log("championDetail", championDetail);
//   const latestVersion = await fetchVersion();

//   return (
//     <main>
//       <div>
//         <h1>{championDetail.name}</h1>
//         <h2>{championDetail.title}</h2>
//         <img
//           src={`${BASE_URL}/cdn/${latestVersion}/img/champion/${championDetail.image.full}`}
//           alt=""
//         />
//         <p>{championDetail.blurb}</p>
//         <div>
//           <ul>
//             <li>공격: {championDetail.info.attack}</li>
//             <li>방어: {championDetail.info.defense}</li>
//             <li>마법: {championDetail.info.magic}</li>
//             <li>난이도: {championDetail.info.difficulty}</li>
//           </ul>
//         </div>
//       </div>
//     </main>
//   );
// }
