import React, { useState, useEffect } from 'react'
import { Platform } from 'react-native'
import { Modal, IconButton, Title } from 'react-native-paper'
import { styles } from '../theme/appTheme'
import WebView from 'react-native-webview'
import { getVideoMovieApi } from '../api/movie'

const ModalVideo = ({show, setShow, idMovie}: any) => {

    const [video, setVideo] = useState('')

    useEffect(() => {
        getVideoMovieApi(idMovie).then((response) => {
            let idVideo:any = null
            response.results.forEach((item: any) => {
                if(item.site === "YouTube" && !idVideo){
                    idVideo = item.key
                }
            });
            setVideo(idVideo)
        })
    }, [])

    return (
        <Modal
            visible={show}
            contentContainerStyle={styles.modal}
        >
            <WebView style={{width:500}} source={{uri: `https://www.youtube.com/embed/${video}?controls=0&showinfo=0`}} />
            <IconButton
                icon="close"
                onPress={() => setShow(false)}
                style={styles.close}
            />
        </Modal>
    )

}

export default ModalVideo
