
// const Imagescard = ({image}) => {
//     return(
//         <div className="max-w-sm rounded overflow-hidden shadow-lg">
//       <img src={"image.webformatURL"} alt="w-full" />
//       <div className="px-6 py-4">
//         <div className="font-bold text-purple-500 text-xl mb-2">
//           photo created by Fatima Rahimi
//         </div>
//         <ul>
//           <li><strong>{image.Views}</strong>
//           4000</li>
//           <li><strong>{image.Downloads}</strong>
//           300</li>
//           <li><strong>{image.Likes}</strong>
//           200</li>
//         </ul>
//       </div>
//       <div className="px-6 py-4">
         
//         <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm fon-semibold text-gray-700
//         mr-2">
//           #tag1
//         </span>
//           <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm fon-semibold text-gray-700
//         mr-2">
//           #tag2
//         </span>
//           <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm fon-semibold text-gray-700
//         mr-2">
//           #tag3
//         </span>

//       </div>
//     </div>
//     )
// }
// export default Imagescard;

const Imagescard = ({ image }) => {
  const tage = image.tags.split(',')
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt={image.tags} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li><strong>Views:</strong> {image.views}</li>
          <li><strong>Downloads:</strong> {image.downloads}</li>
          <li><strong>Likes:</strong> {image.likes}</li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tage.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Imagescard;
