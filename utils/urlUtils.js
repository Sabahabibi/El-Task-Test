export function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    id: params.get("id"),
  };
}
