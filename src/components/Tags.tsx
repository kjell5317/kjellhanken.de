import { useState, type CSSProperties } from "react";

const colors = ["#2ea8ff", "#FFC700", "#22ba64", "#FF6B00"];
var selected: string;
var setSelected: React.Dispatch<React.SetStateAction<string>>;
var tags = ["Work", "Education", "Social", "Project"];

export function Tags() {

    [selected, setSelected] = useState("")
    const style: CSSProperties = {
        display: "flex",
        flexWrap: "wrap",
        padding: "20px 0",
        gap: "15px"
    }

    return (
        <>
          <ul style={style}>
            {
              tags.map((tag) => (
                <li key={tag}>
                      <Tag name={tag} className="tag btn" />
                </li>
              ))
            }
          </ul>
        </>);
}

export function Tag({ name, className}: { name: string, className?: string}) {

    const style: CSSProperties = {
        border: `3px solid ${colors[tags.indexOf(name) % colors.length] || "#4AC7FA"}`,
        color: className?.includes("active") || selected === name ? "#000" : "#FFF",
        fontSize: className?.includes("tag") ? "calc(var(--font-size-text) + 2px)" : "calc(var(--font-size-text) + 1px)",
        padding: className?.includes("tag") ? "8px 15px" : "3px 10px",
        backgroundColor: className?.includes("active") || selected === name ? colors[tags.indexOf(name) % colors.length] : "#2c2c2c",
        margin: className?.includes("tag") ? "0" : "5px"
    }

    return (
        <button style={style} className={className} onClick={() => handleClick(name)}>{name}</button>

    );
}

function handleClick(name: string) {
    if (selected !== name) {
        // Hide all Elements that dont have the tag
        tags.filter(tag => tag !== name).forEach(tag => {
            const elements = document.getElementsByClassName(tag);
            for (let i = 0; i < elements.length; i++) {
                (elements[i] as HTMLElement).style.display = "none";
            }

        });
        // Show all Elements that have the tag
        const elements = document.getElementsByClassName(name);
        for (let i = 0; i < elements.length; i++) {
            (elements[i] as HTMLElement).style.display = "";
        }
        setSelected(name);
    } else {
        // Show all Elements with tags
        tags.forEach(tag => {
            const elements = document.getElementsByClassName(tag);
            for (let i = 0; i < elements.length; i++) {
                (elements[i] as HTMLElement).style.display = "";
            }
        });
        setSelected("");
    }
}