// const SampleTable = () => {
//   return (
//     <>
//       <table className="table-layout: auto;">
//         <thead className="ant-table-thead">
//           <tr>
//             <th className="ant-table-cell">
//               <div className="ant-table-filter-column">
//                 <span className="ant-table-filter-column-title">Id</span>
//               </div>
//             </th>
//             <th className="ant-table-cell">
//               <div className="ant-table-filter-column">
//                 <span className="ant-table-filter-column-title">Status</span>
//                 <span className="ant-table-filter-trigger-container">
//                   <span
//                     role="button"
//                     className="ant-dropdown-trigger ant-table-filter-trigger">
//                     <span
//                       role="img"
//                       aria-label="search"
//                       className="anticon anticon-search">
//                       <svg
//                         viewBox="64 64 896 896"
//                         focusable="false"
//                         data-icon="search"
//                         width="1em"
//                         height="1em"
//                         fill="currentColor"
//                         aria-hidden="true"
//                         className="--darkreader-inline-fill:currentColor;"
//                         data-darkreader-inline-fill="">
//                         <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
//                       </svg>
//                     </span>
//                   </span>
//                 </span>
//               </div>
//             </th>
//             <th className="ant-table-cell">
//               <div className="ant-table-filter-column">
//                 <span className="ant-table-filter-column-title">Typ</span>
//                 <span className="ant-table-filter-trigger-container">
//                   <span
//                     role="button"
//                     className="ant-dropdown-trigger ant-table-filter-trigger">
//                     <span
//                       role="img"
//                       aria-label="search"
//                       className="anticon anticon-search">
//                       <svg
//                         viewBox="64 64 896 896"
//                         focusable="false"
//                         data-icon="search"
//                         width="1em"
//                         height="1em"
//                         fill="currentColor"
//                         aria-hidden="true"
//                         className="--darkreader-inline-fill:currentColor;"
//                         data-darkreader-inline-fill="">
//                         <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
//                       </svg>
//                     </span>
//                   </span>
//                 </span>
//               </div>
//             </th>
//             <th className="ant-table-cell">
//               <div className="ant-table-filter-column">
//                 <span className="ant-table-filter-column-title">Hr</span>
//                 <span className="ant-table-filter-trigger-container">
//                   <span
//                     role="button"
//                     className="ant-dropdown-trigger ant-table-filter-trigger">
//                     <span
//                       role="img"
//                       aria-label="search"
//                       className="anticon anticon-search">
//                       <svg
//                         viewBox="64 64 896 896"
//                         focusable="false"
//                         data-icon="search"
//                         width="1em"
//                         height="1em"
//                         fill="currentColor"
//                         aria-hidden="true"
//                         className="--darkreader-inline-fill:currentColor;"
//                         data-darkreader-inline-fill="">
//                         <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
//                       </svg>
//                     </span>
//                   </span>
//                 </span>
//               </div>
//             </th>
//             <th className="ant-table-cell">Zasób</th>
//           </tr>
//         </thead>
//         <tbody className="ant-table-tbody">
//           <tr data-row-key="1" className="ant-table-row ant-table-row-level-0">
//             <td className="ant-table-cell">1</td>
//             <td className="ant-table-cell">nowa</td>
//             <td className="ant-table-cell">merchandiser</td>
//             <td className="ant-table-cell">kasia kowalska </td>
//             <td className="ant-table-cell">
//               <span>
//                 <a href="/rekrutacje/merchandiser/4">Więcej&nbsp;&gt;</a>
//               </span>
//             </td>
//           </tr>
//           <tr data-row-key="2" className="ant-table-row ant-table-row-level-0">
//             <td className="ant-table-cell">2</td>
//             <td className="ant-table-cell">nowa</td>
//             <td className="ant-table-cell">merchandiser</td>
//             <td className="ant-table-cell">basia nowak </td>
//             <td className="ant-table-cell">
//               <span>
//                 <a href="/rekrutacje/merchandiser/2">Więcej&nbsp;&gt;</a>
//               </span>
//             </td>
//           </tr>
//           <tr data-row-key="6" className="ant-table-row ant-table-row-level-0">
//             <td className="ant-table-cell">6</td>
//             <td className="ant-table-cell">nowa</td>
//             <td className="ant-table-cell">merchandiser</td>
//             <td className="ant-table-cell">kasia kowalska </td>
//             <td className="ant-table-cell">
//               <span>
//                 <a href="/rekrutacje/merchandiser/1">Więcej&nbsp;&gt;</a>
//               </span>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default SampleTable;

// const SampleTable = () => {
//   return (
//     <>
//       <table style={{ tableLayout: "auto" }}>
//         <colgroup></colgroup>
//         <thead className="ant-table-thead">
//           <tr>
//             <th className="ant-table-cell">Name</th>
//             <th className="ant-table-cell">Age</th>
//             <th className="ant-table-cell">Address</th>
//             <th className="ant-table-cell">Tags</th>
//             <th className="ant-table-cell">Action</th>
//           </tr>
//         </thead>
//         <tbody className="ant-table-tbody">
//           <tr className="ant-table-row ant-table-row-level-0">
//             <td className="ant-table-cell">
//               <a>John Brown</a>
//             </td>
//             <td className="ant-table-cell">32</td>
//             <td className="ant-table-cell">New York No. 1 Lake Park</td>
//             <td className="ant-table-cell">
//               <span className="ant-tag ant-tag-green">NICE</span>
//               <span className="ant-tag ant-tag-geekblue">DEVELOPER</span>
//             </td>
//             <td className="ant-table-cell">
//               <div className="ant-space ant-space-horizontal ant-space-align-center">
//                 <div className="ant-space-item" style={{ marginRight: 16 }}>
//                   <a>Invite John Brown</a>
//                 </div>
//               </div>
//             </td>
//           </tr>
//           <tr className="ant-table-row ant-table-row-level-0">
//             <td className="ant-table-cell">
//               <a>Jim Green</a>
//             </td>
//             <td className="ant-table-cell">42</td>
//             <td className="ant-table-cell">London No. 1 Lake Park</td>
//             <td className="ant-table-cell">
//               <span className="ant-tag ant-tag-volcano">LOSER</span>
//             </td>
//             <td className="ant-table-cell">
//               <div className="ant-space ant-space-horizontal ant-space-align-center">
//                 <div className="ant-space-item" style={{ marginRight: 16 }}>
//                   <a>Invite Jim Green</a>
//                 </div>
//               </div>
//             </td>
//           </tr>
//           <tr className="ant-table-row ant-table-row-level-0">
//             <td className="ant-table-cell">
//               <a>Joe Black</a>
//             </td>
//             <td className="ant-table-cell">32</td>
//             <td className="ant-table-cell">Sidney No. 1 Lake Park</td>
//             <td className="ant-table-cell">
//               <span className="ant-tag ant-tag-green">COOL</span>
//               <span className="ant-tag ant-tag-geekblue">TEACHER</span>
//             </td>
//             <td className="ant-table-cell">
//               <div className="ant-space ant-space-horizontal ant-space-align-center">
//                 <div className="ant-space-item" style={{ marginRight: 16 }}>
//                   <a>Invite Joe Black</a>
//                 </div>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default SampleTable;

const SampleTable = () => {
  return (
    <>
      <table style={{ tableLayout: "auto" }}>
        <colgroup></colgroup>
        <thead className="ant-table-thead">
          <tr>
            <th className="ant-table-cell">Name</th>
            <th className="ant-table-cell">Age</th>
          </tr>
        </thead>
        <tbody className="ant-table-tbody">
          <tr className="ant-table-row ant-table-row-level-0">
            <td className="ant-table-cell">
              <a>John Brown</a>
            </td>
            <td className="ant-table-cell">21</td>
          </tr>
          <tr className="ant-table-row ant-table-row-level-0">
            <td className="ant-table-cell">
              <a>Jim Green</a>
            </td>
            <td className="ant-table-cell">21</td>
          </tr>
          <tr className="ant-table-row ant-table-row-level-0">
            <td className="ant-table-cell">
              <a>Joe Black</a>
            </td>
            <td className="ant-table-cell">21</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SampleTable;
