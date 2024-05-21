import React from 'react';
import styles from './styles.module.scss';

function TextComponent() {
    const images = ['https://assets.codepen.io/108082/jake-and-fin-1.jpg', /* outras URLs de imagem */];

    return (
        <div className={styles.container}>
            <aside className={styles.carousel}>
                <div className={styles.carousel__wrapper}>
                    {images.map((item, i) => (
                        <div key={`slide-${i}`} id={`slide-${i}`} className={styles.item}>
                            <img src={item} alt="" width="418" height="418" />
                        </div>
                    ))}
                </div>
            </aside>
            <article className={styles.instagram}>
                <header className={styles.instagram__header}>
                    {/* Conteúdo do cabeçalho */}
                </header>
                <section className={styles.instagram__media}>
                    <div className={styles.img}>
                        {/* Conteúdo da imagem */}
                    </div>
                </section>
            </article>
        </div>
    );
}

export default TextComponent;
