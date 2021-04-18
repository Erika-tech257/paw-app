// import { timeStamp } from 'console'
import React, { Component } from 'react'
import APIURL from '../../environment'
import './ImagePost.css'

/* Go into the endpoint and add a user params similar to postcontroller so image is attached to each user. create an img tag or p tag(<p>{Obj.id}</p>) to help display image maybe with postcatalog or similar to commenthistory component. within the put/update fetch pass Obj and dig into the array and grab the secure url of the image(would be in the console).Also use .map(map method to map over images attached to users) & use a ternary in the return to display what the user has uploaded or default image will display. May try to use onChange for update.
ImagePost added to Post Catalog JSX
*/


interface ImgProps {
    sessionToken: any
    id:string

}

type ImgState = {
    avUrl: string;
  


}

const CLOUD_URL = "https://api.cloudinary.com/v1_1/dc7cdwbh0/image/upload"

class ImagePost extends Component<ImgProps, ImgState> {
    constructor(props: ImgProps) {
        super(props)

        this.state = {
            avUrl: "https://res.cloudinary.com/dc7cdwbh0/image/upload/v1612579019/BallrApp/bdglvnjus2vwxwf6iwa0.jpg"
           
            //    copy secure url image from console goes into avUrl as default image

        }
        // uploaded image manually to cloudinary
        this.setState({ avUrl: "" })
      

    }
    handleSubmit = async (e: any) => {
        e.preventDefault()

        // 'http://localhost:5000/user/cloudsign'

        const response = await fetch(`${APIURL}/user/cloudsign`, {
            method: 'GET',
            headers: {
                'Authorization': this.props.sessionToken
            }
        })

        const { sig, ts } = await response.json()

        console.log(ts);

        // const file = HTMLElement.itemId('file-input').files[0]
        const file = (document.getElementById(`file-input-${this.props.id}`) as HTMLInputElement)!.files![0]
        // const file = (document.getElementById('file-input'))!.files[0]
        const formData = new FormData()

        formData.append('file', file)
        formData.append('upload_preset', 'uuhz0rq7')
        formData.append('api_key', '513851381862193')
        formData.append('signature', sig)
        formData.append('timestamp', ts)
        console.log(file);

        const results = await (await fetch(CLOUD_URL, {
            method: "POST",
            body: formData
        })).json()

        console.log(results)

        this.setState({ avUrl: results.secure_url })
       

        // 'http://localhost:5000/user/imageset'

        const final = await (await fetch(`${APIURL}/pawpost/imageset`, {
            method: 'PUT',
            headers: {
                'Authorization': this.props.sessionToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: results.secure_url, id:this.props.id})
        })).json()

        console.log(final);
    }


    render() {
        return (
            <div>
                <form encType="multipart/form-data" onSubmit={this.handleSubmit}>

                    <input id={`file-input-${this.props.id}`} type="file"
                        placeholder="Upload an image"
                    />
                    <button className='loadButton' >Upload!
                    </button>
                    <img src = {this.state.avUrl ? this.state.avUrl : ""} alt = "pet img" />

              

                </form>


            </div>
        )
    }
}
export default ImagePost