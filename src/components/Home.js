import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase"; //using database from firebase
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

/*
The <Home> component will see the new state value from the store and 
re-render itself with the new data
*/
const Home = (props) => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {

        //movies is a collection name of the firebase db
        db.collection("movies").onSnapshot((snapshot) => {
            //docs is a list of records of the firebase db
            snapshot.docs.map((doc) => {
                //doc is an individual records of the firebase db
                //type is field name
                //...doc.data() - this means entire data
                switch (doc.data().type) {
                    case "recommend":
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;

                    case "new":
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                        break;

                    case "original":
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;

                    case "trending":
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;
                }
            });

            //The corresponding Redux action will be dispatched to the store.
            dispatch(

                //The slice reducer will see the actions and update its state.
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                })
            );
        });
    }, [userName]); //update it when username gets updated

    return <Container>
        <ImgSlider />
        <Viewers />
        <Recommends />
        <NewDisney />
        <Originals />
        <Trending />
    </Container>
}

const Container = styled.main`
    position:relative;
    min-height:calc(100vh - 250px);
    overflow:hidden;
    top:72px;
    padding: 0 calc(3.5vw + 5px);
    
    &: after{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1; 
        z-index: -1;
    }

`

export default Home;