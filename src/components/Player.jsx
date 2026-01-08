import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [tempName, setTempName] = useState(name);
    const handleEditClick = () => {
        setIsEditing((prev) => !prev)
 
    }
    
    return (
        <li>
            <span className="player">
                {!isEditing ? (<span className="player-name">{tempName}</span>) : (
                    <input
                        type="text"
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        required
                    />
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}