export default {
    debounce: (fn, ms = 500) => {
        let timeout;
          return () => {
            clearTimeout(timeout);
            timeout = setTimeout(fn, ms)
          };
        },
}