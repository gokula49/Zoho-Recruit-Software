export default function PageNotFound(){
    return(
        <>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#339966',minHeight:'100vh'}}>
            <div>
                <h2>This application is developed by team TechPirates.</h2>
                <p>Mail your queries to{" "}
                    <a href="" 
                    style={{
                        "&:link":{
                            color:'red'
                        }
                    }}>
                        techpiratesteam@gmail.com
                    </a>
                </p>
            </div>
        </div>
        </>
    )
}