// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth, db } from "../firebaseConfig";
// import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

// export default function LikeArticle({ id, likes }) {
//   const [user] = useAuthState(auth);

//   const likesRef = doc(db, "Articles", id);

//   const handleLike = () => {
//     if (likes?.includes(user.uid)) {
//       updateDoc(likesRef, {
//         likes: arrayRemove(user.uid),
//       })
//         .then(() => {
//           console.log("unliked");
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     } else {
//       updateDoc(likesRef, {
//         likes: arrayUnion(user.uid),
//       })
//         .then(() => {
//           console.log("liked");
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     }
//   };
//   return (
//     <div
//       className={`${!likes?.includes(user.uid) ? <ThumbUpAltIcon /> : ""}`}
//       style={{
//         cursor: "pointer",
//         color: likes?.includes(user.uid) ? "red" : null,
//       }}
//       onClick={handleLike}
//     ></div>
//   );
// }

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../Firebase/firebaseConfig";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
export default function Like({ id, likes }) {
  const [user] = useAuthState(auth);

  const likesRef = doc(db, "Articles", id);

  const handleLike = () => {
    if (likes?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
      })
        .then(() => {
          console.log("unliked");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      updateDoc(likesRef, {
        likes: arrayUnion(user.uid),
      })
        .then(() => {
          console.log("liked");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div>
      <ThumbUpOffAltOutlinedIcon
        style={{
          cursor: "pointer",
          color: likes?.includes(user.uid) ? "red" : null,
        }}
        onClick={handleLike}
      />

      {/* <i
        className={`{!likes?.includes(user.uid) ? "-o" : ""}`}
        style={{
          cursor: "pointer",
          color: likes?.includes(user.uid) ? "red" : null,
        }}
        onClick={handleLike}
      /> */}
    </div>
  );
}

// import React, { useState } from "react";
// import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
// // / import { useAuthState } from "react-firebase-hooks/auth";
// // import { auth, db } from "../firebaseConfig";
// // import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

// const Like = () => {
//   const [likes, setLikes] = useState(10);
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = (e) => {
//     if (isClicked) {
//       setLikes(likes - 1);
//       e.target.style.color = "black";
//     } else {
//       setLikes(likes + 1);
//       e.target.style.color = "blue";
//     }
//     setIsClicked(!isClicked);
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       <p>{likes}</p>

//       <div
//         style={{ display: "flex", alignItems: "center" }}
//         onClick={handleClick}
//       >
//         <ThumbUpOffAltIcon style={{ cursor: "pointer" }} />
//       </div>
//     </div>
//   );
// };

// export default Like;
