import React from "react"

import {Button,Image} from "react-bootstrap"
import axios from "axios"

const PostButton = ({match_team_property_id, img_src, msg, post_type, setDisplay}) => {
  // console.log(match_id);
  // console.log(post_type);
  console.log(setDisplay);
  const createPost = () => {
      axios.post("http://localhost:3000/v1/posts",
      {
        match_team_property_id: match_team_property_id,
        user_id: JSON.parse(localStorage.currentUser).id,
        post_type: post_type,
      },
      {
        headers: {
          uid: localStorage.getItem('uid'),
          'access-token': localStorage.getItem('access-token'),
          client: localStorage.getItem('client')
        }
      },
      )
      .then(response => response.data)
      .then(data => {
        setDisplay("none");
        // setLoading(false);
      })
      .catch(error => console.log(error))
  }
  return (
    <Button variant="link text-secondary button_link" type="submit" onClick={createPost}>
      <Image className="emblem" src={`${process.env.PUBLIC_URL}/${img_src}.png`} roundedCircle />
      <p>{msg}</p>
    </Button>
  )
}
export default PostButton;
