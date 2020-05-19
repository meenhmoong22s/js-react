import React, { Component } from 'react';

class Content extends Component {
    // phím tắt con tab ra
    constructor(props) {
        super(props);
        // props bien chuyen tham so
        this.state = {
            trangthai: 0
        }
    }
    thongbao = () => {
        alert("tuong tac trong reactjs"); 
        // console.log('hello');

    }
    thongbao2 = () => { alert("tuong tac trong reactjs lan 2"); }

    thongbao3 = (x) => { alert(x); }

    renderButton = () => {
        return(
            <div className="row">
            <div className="btn btn-group">
                <div className="btn  btn-info" onClick={()=>this.thongbao()}>edit</div>
                {/* 4 cai can luu y la C viet hoa 
                                    va voi ham khong co tham so thi thongbao khong can () 
                                    dung this de goi ham 
                                    va dau {} */}
                <div className="btn  btn-warning" onClick={this.thongbao2}>remove</div>
                {/* gọi hàm có tham số */}
                {/* <div className="btn  btn-dark" onClick={()=>this.thongbao3('haha')}>remove</div> */}
                <div className="btn  btn-success" onClick={this.thongbao3.bind(this, 'hohoho')}>success</div>
            </div>

        </div>
        );
    }
    renderForm = () => (
        <div className='row'>
            <div className='form-group'>
                <input type='text' name='ten' className='form-control'></input>
                <div className="btn  btn-success" >save</div>
            </div>
        </div>
        
    )
        
            

    check = () => {
        if(this.state.trangthai === 0){
            return this.renderButton();
        }else{
            return this.renderForm
        }
    }
    render() {
        return (
            <div className="col-lg-4">
                <div className="row">
                    <div className="col-lg-5 ">
                        {/* note dau cach cua col-lg-6 cach  */}
                        {/* dung this.props.vitri1 de set vi tri cot cho div */}
                        <div className="p-1">
                            <img className="img-fluid rounded-circle" src={this.props.anh} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="p-1">
                            <h2 className="display-6">{this.props.tieude}</h2>
                            <p>dung this.props.tieude de set tieu de.
                                        {this.props.tridan}
                            </p>

                    {/* goi ham */}
                    {this.check()}

                            <hr />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;