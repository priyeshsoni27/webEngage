import React, { useState ,useEffect} from 'react'
import "./data.css"

const Nunjucks = () => {
    const [data,setData]=useState([])


        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
             .then((data) => setData(data));
           }, []);



  return (

                    <div>
                        <div className="App">
                        <table>
                            <b>Even details</b>
                            <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            </tr>
                            {data.map((val, key) => {
                                if(val?.id%2==0){
                                    return (
                                        <tr key={key}>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.username}</td>
                                        <td>{val.email}</td>
                                        </tr>
                                    )

                                }
                                
                            })}
                        </table>
                    </div>

                    <>
                    <div className="App">
                        <table>
                            <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Street</th>
                            <th>Suit</th>
                            <th>City</th>
                            <th>zipcode</th>
                            <th>Latitude</th>
                            <th>Longitude</th>

                            </tr>
                            {data.map((val, key) => {
                                {
                                    return (
                                        <tr key={key}>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.address.street}</td>
                                        <td>{val.address.suite}</td>
                                        <td>{val.address.city}</td>
                                        <td>{val.address.zipcode}</td>
                                        <td>{val.address.geo.lat}</td>
                                        <td>{val.address.geo.lng}</td>

                                        </tr>
                                    )

                                }
                                
                            })}
                        </table>
                    </div>
                    </>
                    <>
                    {/* {data?.filter((lastValues)=>{
                        let itemValue=[];
                        if(lastValues.email.endsWith("biz")){
                            itemValue.push(lastValues);
                            return(
                                <p>{itemValue.email}</p>
                            )
                        }
                    })} */}
                    
                    </>

                     <div>
                        <div className="App">
                        <table>
                            <b>City </b>
                            <tr>
                            <th>Id</th>
                            <th>City</th>
                            <th>zipcode</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            </tr>
                            {data?.map((items)=>{
                 
                        let arr=["Aliyaview","Howemouth","Gwenborough"]
                        
                        if(arr.includes(items?.address?.city)){
                            
                            return(
                                <tr >
                                <td>{items.id}</td>
                                <td>{items.address.city}</td>
                                <td>{items.address.zipcode}</td>
                                <td>{items.address.geo.lat}</td>
                                <td>{items.address.geo.lng}</td>
                                </tr>
                            )
                        }
                            })}
                        </table>
                        </div>
                    </div>

                    

        

        <div>
        
        </div>
    </div>
  )
}

export default Nunjucks;
