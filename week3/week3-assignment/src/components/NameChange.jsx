import { useState } from "react";

export default function NameChange() {
    const [name, setName] = useState('thisishwarang')
    const handleName = () => {
        setName("coolguy")
    }
    return (
        <div onClick={handleName}>
            {name}
        </div>
    );
}

