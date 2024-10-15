import React from 'react';
import { Helmet } from 'react-helmet';

function HeadContent() {
    return (
        <Helmet>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* CSS Files */}
            <link rel="stylesheet" href="/static/assets/css/body.css" />
            <link rel="stylesheet" href="/static/assets/css/cors.css" />
            <link rel="stylesheet" href="/static/assets/css/header/header.css" />
            <link rel="stylesheet" href="/static/assets/css/headerMobile.css" media="screen and (max-width: 840px)" />
            <link rel="stylesheet" href="/static/assets/css/navBar/navBar.css" />
            <link rel="stylesheet" href="/static/assets/css/navBarMobile.css" media="screen and (max-width: 840px)" />
            <link rel="stylesheet" href="/static/assets/css/banner/banner.css" />
            <link rel="stylesheet" href="/static/assets/css/bannerMobile/bannerMobile.css" media="screen and (max-width: 840px)" />
            <link rel="stylesheet" href="/static/assets/css/card/card.css" />
            <link rel="stylesheet" href="/static/assets/css/petCadastro/petCadastro.css" />
            <link rel="stylesheet" href="/static/assets/css/petCadastro/petCadastroMobile.css" media="screen and (max-width: 840px)" />
            <link rel="stylesheet" href="/static/assets/css/petDetail/petDetail.css" />
            <link rel="stylesheet" href="/static/assets/css/petDetail/petDetailMobile.css" media="screen and (max-width: 840px)" />
            <link rel="stylesheet" href="/static/assets/css/config/config.css" />
            <link rel="stylesheet" href="/static/assets/css/configMobile/config.css" media="screen and (max-width: 840px)" />
            <link rel="stylesheet" href="/static/assets/css/configUser/configUser.css" />
            <link rel="stylesheet" href="/static/assets/css/petsAdded/petAdded.css" />
            <link rel="stylesheet" href="/static/assets/css/petsSave/petSave.css" />
            <link rel="stylesheet" href="/static/assets/css/login/googleLogin.css" />
            <link rel="stylesheet" href="/static/assets/css/login/googleLoginMobile.css" media="screen and (max-width: 840px)" />
            <link rel="stylesheet" href="/static/assets/css/login/password.css" />
            <link rel="stylesheet" href="/static/assets/css/login/mobile/password.css" media="screen and (max-width: 840px)" />
            <link rel="stylesheet" href="/static/assets/css/contato/contato.css" />
            <link rel="stylesheet" href="/static/assets/css/contato/mobile/contato.css" media="screen and (max-width: 840px)" />
            <link rel="stylesheet" href="/static/assets/css/dashboard/dashboard.css" />
            <link rel="stylesheet" href="/static/assets/css/dashboard/mobile/dashboard.css" media="screen and (max-width: 840px)" />

            {/* Favicon */}
            <link rel="shortcut icon" href="/static/assets/img/favicons/logo.ico" type="image/x-icon" />

            <title>Pets</title>
        </Helmet>
    );
}

export default HeadContent;