import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./pages/PageOne";
import {Error404} from "./pages/Error404";
import { pagesState,  PageStateType, } from './state/pagesState';
import Page from './pages/Page';



export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                  <div>
                    <NavLink to={'/page/0'}>Page 1</NavLink>
                  </div>
                  <div>
                    <NavLink to={'/page/1'}>Page 2</NavLink>
                  </div>
                  <div>
                    <NavLink to={'/page/2'}>Page 3</NavLink>
                  </div>
                </div>
                <div className={styles.content}>
               <Routes>
                 <Route path={'/'} element={<Navigate to={'/page/0'}/>} />
                 <Route path={'/page/:id'} element={<Page state={pagesState.pages}/>} />

                 <Route path={'*'} element={<Error404/>} />
               </Routes>
                </div>
            </div>
        </div>
    );
};

