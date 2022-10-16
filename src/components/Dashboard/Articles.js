import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { auth, db } from "../Firebase/firebaseConfig";
import DeleteArticle from "./DeleteArticle";
import { useAuthState } from "react-firebase-hooks/auth";
import Like from "../Likes/Like";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);
  return (
    <div>
      {articles.length === 0 ? (
        <p>No articles found!</p>
      ) : (
        articles.map(
          ({
            id,
            title,
            description,
            imageUrl,
            createdAt,
            createdBy,
            userId,
            likes,
            comments,
          }) => (
            <div key={id}>
              <div style={{ height: "80vh" }}>
                <div
                  style={{
                    position: "relative",
                    top: "30px",
                    width: "35vw",
                    minHeight: "30vh",
                    maxHeight: "fit-content",
                    margin: "auto",
                    boxShadow: "rgb(145 158 171 / 24%) 0px 8px 16px 0px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "20px",
                    }}
                  >
                    <div>
                      {createdBy && (
                        <span
                          style={{
                            display: "flex",
                            padding: "5px 0px 0px 0px",
                            fontSize: "larger",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <Avatar></Avatar>
                          <label> {createdBy}</label>
                        </span>
                      )}
                    </div>
                    <div>
                      {user && user.uid === userId && (
                        <DeleteArticle id={id} imageUrl={imageUrl} />
                      )}
                    </div>
                  </div>
                  <div style={{ margin: "10px 0px 0px 10px", padding: "0px" }}>
                    {/* <h3>{title}</h3> */}
                    <p
                      style={{
                        fontSize: "12px",
                        color: "grey",
                        margin: "-30px 0px 0px 50px",
                      }}
                    >
                      {createdAt.toDate().toDateString()}
                    </p>
                    <p
                      style={{
                        fontSize: "18px",
                        textAlign: "start",
                        marginLeft: "20px",
                      }}
                    >
                      {description}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Link to={`/article/${id}`}>
                      <img
                        src={imageUrl}
                        alt="title"
                        style={{
                          maxHeight: "40vh",
                          maxWidth: "100%",
                        }}
                      />
                    </Link>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "25px",
                        gap: "15px",
                      }}
                    >
                      {user && <Like id={id} likes={likes} />}
                      <div>
                        <p>{likes?.length} likes</p>
                      </div>
                      {/* <div
                        style={{
                          outline: "1px solid #6fbbd3",
                          borderRadius: "15px",
                          width: "80%",
                          display: "flex",
                          justifyContent: "start",
                          margin: "-30px 30px 0px 0px",
                        }}
                      >
                        {comments && comments.length > 0 && (
                          <div>
                            <p>{comments?.length} comments</p>
                          </div>
                        )}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}
