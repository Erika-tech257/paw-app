import React, { Component } from 'react'
import APIURL from '../../environment'

interface ImgProps {
    sessionToken: any
}

type ImgState = {
    avUrl: string,
    
    
}

const CLOUD_URL = "https://api.cloudinary.com/v1_1/dc7cdwbh0/image/upload"

class ImagePost extends Component<ImgProps, ImgState> {
    constructor(props: ImgProps) {
        super(props)

        this.state = {
            avUrl: "",
        //    copy secure url image from console goes into avUrl as default image
            
        }
        // uploaded image manually to cloudinary
        this.setState({ avUrl: ("https://res.cloudinary.com/dc7cdwbh0/image/upload/v1611282353/Home%20Bound%20Paws/puppy-1903313_1280_fkacdx.jpg") })
    
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
            
            // const fileInput = document.getElementById('file-input')
            // let file
            // if(fileInput !== null){
            //     file = (fileInput as HTMLInputElement)!.files[0]

            // }
            // const file = HTMLElement.itemId('file-input').files[0]
            const file = (document.getElementById('file-input') as HTMLInputElement)!.files![0]
            // const file = (document.getElementById('file-input'))!.files[0]
            const formData = new FormData()
        
            formData.append('file', file)
            formData.append('upload_preset', 'uuhz0rq7')
            formData.append('api_key', '513851381862193')
            formData.append('signature', sig)
            formData.append('timestamp', ts)

            const results = await (await fetch(CLOUD_URL, {
                method: "POST",
                body: formData
            })).json()
        
            console.log(results)
        
            this.setState({avUrl:results.secure_url})

            // 'http://localhost:5000/user/imageset'
        
            const final = await (await fetch(`${APIURL}/user/imageset`, {
                method: 'PUT',
                headers:{
                'Authorization': this.props.sessionToken,
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: results.secure_url})
            })).json()
        
            console.log(final);
        }
    
    
    render() {
        return (
            <div>

                <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
                    <input id="file-input" type="file" />
                    <button className='loadButton' >Upload!</button>
                </form>
                <img src={this.state.avUrl} alt="PetImage" />

            </div>
        )
    }
}
export default ImagePost