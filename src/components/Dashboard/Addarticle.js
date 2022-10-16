import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, auth, db } from "../Firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { Box, Button } from "@material-ui/core";

export default function Addarticle() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    // title: "",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.description || !formData.image) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
            createdBy: user.displayName,
            userId: user.uid,
            likes: [],
            comments: [],
          })
            .then(() => {
              toast("Article added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <div
      style={{
        width: "fit-content",
        display: "flex",
        justifyContent: "end",
        margin: "70px 0px 0px 450px",
        height: "120px",
      }}
    >
      <div
        style={{
          // border: "1px solid green",
          height: "130px",
          margin: "0px 0px 10px 10px",
          borderRadius: "10px",
          padding: "5px",
          width: "fit-content",
          backgroundColor: "#FFFFFF",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        <h2
          style={{
            // outline: "1px solid green",
            textAlign: "center",
            marginTop: "0px",
          }}
        >
          Create Post:
        </h2>
        <div style={{ display: "flex" }}>
          <div
            style={{
              // outline: "1px solid red",
              marginTop: "-10px",
              height: "90px",
              width: "fit-content",
              display: "flex",
              gap: "30px",
              alignItems: "center",
            }}
          >
            {/* <div style={{ marginTop: "10px", fontSize: "large" }}>
              <label htmlFor="">Title:-</label> <br></br>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => handleChange(e)}
                style={{
                  outline: "none",
                  height: "30px",
                  border: "none",
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                  backgroundColor: "#E4E6E9",
                  width: "200px",
                }}
              />
            </div> */}
            {/* description */}
            <div style={{ marginTop: "10px", fontSize: "large" }}>
              <label htmlFor="">Status</label>
              <br></br>
              <textarea
                name="description"
                value={formData.description}
                onChange={(e) => handleChange(e)}
                style={{
                  outline: "none",
                  height: "30px",
                  border: "none",
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                  backgroundColor: "#E4E6E9",
                  width: "200px",
                }}
              />
            </div>
          </div>
          {/* image */}
          <div
            style={{
              fontSize: "20px",
              // outline: "1px solid navy",
              display: "flex",
              alignItems: "center",
              margin: "5px",
            }}
          >
            <label htmlFor="">Image</label>
            <br></br>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="form-control"
              onChange={(e) => handleImageChange(e)}
              style={{ fontSize: "15px" }}
            />
            {progress === 0 ? null : (
              <div className="progress">
                <div style={{ width: `${progress}%` }}>
                  {`uploading image ${progress}%`}
                </div>
              </div>
            )}
          </div>
          <div
            style={{
              height: "40px",
              margin: "20px 0px 0px -80px",
            }}
          >
            <Button
              variant="contained"
              onClick={handlePublish}
              sx={{
                ":hover": {
                  bgcolor: "primary.main", // theme.palette.primary.main
                  color: "white",
                },
              }}
            >
              Publish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
