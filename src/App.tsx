import { useLocalStorage } from "usehooks-ts";

export const App = () => {
  const [counter, setCounter, _] = useLocalStorage("counter", 0);
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7fafc",
      }}
    >
      <p
        style={{
          marginBottom: "1rem",
          fontSize: "1.125rem",
          fontWeight: "600",
        }}
      >
        Minimum reproducible example
      </p>
      <p style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
        Counter: {counter}
      </p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          style={{
            borderRadius: "0.25rem",
            backgroundColor: "#4299e1",
            padding: "0.5rem 1rem",
            color: "white",
            cursor: "pointer",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#2b6cb0")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4299e1")
          }
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
        <button
          style={{
            borderRadius: "0.25rem",
            backgroundColor: "#f56565",
            padding: "0.5rem 1rem",
            color: "white",
            cursor: "pointer",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#c53030")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#f56565")
          }
          onClick={() => setCounter(counter - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
