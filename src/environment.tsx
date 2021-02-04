let APIURL = ""

switch (window.location.hostname) {
    case 'localhost': 
    case '127.0.0.1':
        APIURL='http://localhost:5000'
        break
        case 'ej-pawappclient.herokuapp.com':
            APIURL='https://ej-pawapp.herokuapp.com'
}

export default APIURL