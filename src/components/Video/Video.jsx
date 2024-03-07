import './Video.scss'

export function Video(props) {
    const {image} = props.jsonData[0]
    console.log(props.jsonData[0].image);
return ( 
    
    <>
        <section>

        <article className="video__cont">
            <video className="video" controls poster={image} >

            </video>
        </article>

        </section>
    </>  
   
)
};
