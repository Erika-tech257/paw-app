import React, { Component } from 'react'

interface ImgProps {
    SessionToken: any
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
           
            
        }
        
        this.setState({ avUrl: ("https://res.cloudinary.com/dc7cdwbh0/image/upload/v1605829363/BallrApp/yysv5rrbggtxxkdoa558.png") })
    
    }
            handleSubmit = async (e: any) => {
            e.preventDefault()

            let serverLink = 'http://localhost:5000'

            const response = await fetch(`${serverLink}/user/cloudsign`, {
                method: 'GET',
                headers: {
                    'Authorization': this.props.SessionToken
                }
            })

            const { sig, ts } = await response.json()

            console.log(ts);
            
            
            // const file = HTMLElement.itemId('file-input').files[0]
            // const file = document.getElementById('file-input').files[0]
            // const file = document.querySelectorAll<HTMLElement>('file-input').files[0]
            const formData = new FormData()
        
            // formData.append('file', file)
            formData.append('upload_preset', 'uuhz0rq7')
            formData.append('api_key', '513851381862193')
            formData.append('signature', sig)
            formData.append('timestamp', ts)

            const results = await (await fetch(CLOUD_URL, {
                method: "POST",
                body: formData
            })).json()
        
            console.log(results)
        
            this.setState({avUrl:(results.secure_url)})
        
            const final = await (await fetch(`${serverLink}/user/imageset`, {
                method: 'PUT',
                headers:{
                'Authorization': this.props.SessionToken,
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
                <img src={this.state.avUrl} alt="avatar" />

            </div>
        )
    }
}
export default ImagePost