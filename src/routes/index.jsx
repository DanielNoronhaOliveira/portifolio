import { createBrowserRouter } from "react-router-dom"

import { Header } from "../components";
import { Home, Projetos, Servicos, SaibaMais, Curriculo, Contatos } from "../container";


export const router = createBrowserRouter([
    
    {

        path: '/saiba-mais',
        element: (
            <>
                
                <SaibaMais />
                
            </>
        ),

    },
    {

        path: '/',
        element: (
            <>
                <Header />
                <Home />
                
            </>
        ),

    },
    {

        path: '/projetos',
        element: (
            <>
                
                <Projetos />
                
            </>
        ),

    },
    {

        path: '/servicos',
        element: (
            <>
                
                <Servicos />
                
            </>
        ),

    },
    {

        path: '/curriculo',
        element: (
            <>
                
                <Curriculo />
                
            </>
        ),

    },
    {

        path: '/contatos',
        element: (
            <>
                
                <Contatos />
                
            </>
        ),

    },
])