import React, { Component } from 'react';
class navbar extends Component {
    state = { 
        title: 'TODO smile ',
        datas:[],
        act : 0
     }
     componentDidMount()
     {
         this.refs.name.focus();
     }

     fSubmit =(e)=>
     {
        
        let datas = this.state.datas;
        let name = this.refs.name.value;

        if(this.state.act === 0 )
        {
            let data = {
                name 
            }
            datas.push(data);
        }
        else{
            let index = this.state.index ;
            datas[index].name = name ;
        }

        

       

        this.setState({
            datas : datas,
            act : 0 
        });

        this.refs.myform.reset();
        this.refs.name.focus();

     }
     fRemove= (i)=>
     { 
         let datas = this.state.datas;
         datas.splice(i,1);
         this.setState({
             datas:datas
         });

         this.refs.myform.reset();
         this.refs.name.focus();
     }

     fEdit= (i)=>
     {
        console.log(i);
         let data = this.state.datas[i];
         this.refs.name.value = data.name ;

         this.setState({
             act: 1, 
             index: i
         });
         this.refs.name.focus();
     }


    render() { 
        let datas = this.state.datas;
    return(
        <React.Fragment>
            
            <h2> {this.state.title }</h2>
             <nav class="navbar navbar-default">
                <div class="container-fluid" style={{ border: '1px solid #d0d8d5' }}>
                    <div class="navbar-header">
                    <span style={{float:"left"}} class="navbar-brand m-2" >
                        Navbar
                    </span>
                    <span style={{float:"left" }}> 
                    <form ref="myform" className="form-inline">
                        <div>
                            <input type="text" ref="name" class="form-control m-2" placeholder="Insert data"/>
                            <button onClick={(e)=> this.fSubmit(e)} type="submit" class="btn btn-default btn-primary m-2">ADD</button>
                        </div>
                    </form>
                    </span>

                    <pre>  
                        {    datas.map((datas , i )=>
                            <li style={{ margin: "m-50"}} key={i} > 
                            ID={i+1} TEXT Data ={datas.name} &nbsp;
                            <button onClick={()=> this.fEdit(i)} className="btn-primary">Edit</button>&nbsp;
                            <button onClick={()=> this.fRemove(i)} className="btn-warning">Remove</button> 
                             </li>
                        )}
                        </pre>
                    </div>
                    
                   
                </div>
            </nav>

            </React.Fragment>
    )
    }
}
 
export default navbar;