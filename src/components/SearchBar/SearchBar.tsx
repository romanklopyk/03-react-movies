import styles from './SearchBar.module.css';
import React from "react";
import toast, {Toaster} from 'react-hot-toast';

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

function SearchBar({onSubmit}: SearchBarProps) {

    const [inputValue, setInputValue] = React.useState('');

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.currentTarget.value);
    }

    function handleForm(): void {
        if (inputValue.trim()) {
            onSubmit(inputValue.trim());
            // setInputValue('');
        } else {
            toast("Please enter your search query.");
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
                <form className={styles.form} action={handleForm}>
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
            <Toaster/>
        </header>
    )
}

export default SearchBar;