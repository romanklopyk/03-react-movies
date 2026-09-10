import styles from './SearchBar.module.css';
import React from "react";

interface SearchBarProps {
    handleForm: (query: string) => void;
}

function SearchBar({handleForm}: SearchBarProps) {

    const [inputValue, setInputValue] = React.useState('');

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function formSubmit() {
        if (inputValue) {
            handleForm(inputValue);
        } else {
            console.log("No input value")
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a
                    className={styles.link}
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by TMDB
                </a>
                <form className={styles.form} action={formSubmit}>
                    <input
                        onChange={handleInput}
                        className={styles.input}
                        type="text"
                        name="query"
                        autoComplete="off"
                        placeholder="Search movies..."
                        autoFocus
                        value={inputValue}
                    />

                    <button className={styles.button} type="submit">
                        Search
                    </button>
                </form>
            </div>
        </header>
    )
}

export default SearchBar;