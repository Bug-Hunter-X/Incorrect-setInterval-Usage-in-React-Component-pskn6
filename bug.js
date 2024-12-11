```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The callback function doesn't properly update the state.
    const intervalId = setInterval(() => {
      setCount(count + 1); // This is incorrect; it uses the stale closure value of 'count'
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```