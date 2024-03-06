

export function Video(props) {
    const {image} = props.jsonData[0]
    console.log(props.jsonData[0].image);
return ( 
    
    <>
        <section>

        <article className="video__cont">
            <video className="video" controls poster={image} width="100%" height="auto">

            </video>
        </article>

        </section>
    </>  
   
)
};
