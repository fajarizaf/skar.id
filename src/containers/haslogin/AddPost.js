import React, { Fragment } from 'react';
import Loading from 'react-loading';
import CKEditor from '@ckeditor/ckeditor5-react';
import BallonEditor from '@ckeditor/ckeditor5-build-balloon';
import ContentEditable from "react-contenteditable";
import '../../assets/css/App.css';
import '../../assets/css/Form.css';

class AddPost extends React.Component {
    constructor() {
        super();
        this.state = {
            form: {
                titlepost:'Judul Postingan',
                contentpost:'',
                catpost:'',
                tagpost:'',
                authorpost:1
            },
            isLoading: false,
            isDisabled:false,
            isStatus:''
        }
    }
  
    onChange = (event) => {
        let newdata = {...this.state.form}
        newdata[event.target.name] = event.target.value
        this.setState({
            form: newdata
        })
    }

    onTitle = (event) => {
        let newdata = {...this.state.form}
        newdata['titlepost'] = event.target.value
        this.setState({
            form: newdata
        })
    }

    onSubmit = async () => {
        this.setState({isLoading:true})
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.form)
        };
        const response = await fetch('http://localhost:4000/api/post/', requestOptions);
        const data = await response.json();
        if(data.response == 'success') {
            this.setState({isLoading:false})
            console.log('hore data berhasil disubmit')
        } else {
            this.setState({isLoading:false})
            console.log('sedih, data gagal disubmit')
        }
    }

    editorConfiguration = {
        placeholder: 'Apa yang anda pikirkan...'
    };

    render() {
        return (
            <Fragment>
                <div className="main">
                    <div className="formfield">
                        <ContentEditable
                            style={{fontSize:'2.5rem',color:'#1a202c'}} 
                            className="font-1"
                            html={this.state.form.titlepost} // innerHTML of the editable div
                            disabled={false} // use true to disable edition
                            onChange={this.onTitle}
                        />
                    </div>
                    <div className="formfield" style={{marginTop:'0px'}}>
                        <CKEditor
                        editor={ BallonEditor }
                        data={this.state.form.contentpost}
                        config = {this.editorConfiguration}
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            let newdata = {...this.state.form}
                            newdata['contentpost'] = data
                            this.setState({
                                form: newdata
                            })
                        } }
                        />
                    </div>
                    <div className="formfield">
                        <select className="minimal" name="catpost" onChange={this.onChange}>
                            <option value="1">React</option>
                            <option value="2">Native</option>
                        </select>
                    </div>
                    <div className="formfield">
                        <input type="text" name="tagpost" placeholder="contoh : #tagname#tagname" onChange={this.onChange} />
                    </div>
                    
                    <button onClick={this.onSubmit}>
                        {
                            this.state.isLoading ?
                            <Loading type="spin" color="#fff" width="24px" height="24px" />
                            :
                            <span>Submit</span>
                        }
                        
                    </button>
                </div>
            </Fragment>
        )
    }
}

export default AddPost;

