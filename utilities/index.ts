import { Kurd } from "../kurds";

export function getPhoto(kurd: Kurd) {
  let image =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBhIRBxIOExAQEREVFxYVDRcVExIVGBIWFhUSFRUYHSggGh0lGxcVLTEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ4PEjEZFRkrKysrLTctLSsrKzctNysrLSsrNy0tKysrKy0rLSsrKysrKysrKystLSsrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFBgIBB//EADUQAQABAgMDCQcEAwEAAAAAAAABAgMEBRESITETQVFhcYGhscEUIjI0kdHwQlKS4SRy8SP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP0wBpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHqiiblWlETMg8vsRrOkcV2jLKqvjmmPGWjh8NTh6fcjf088mjMtZdXX8WlPbx+kJ4yr91U/xaQmqzpyqOaqf4o68rqj4KontjRqhowbuErtfHTOnTG+EDpVTE4Gm9GtO6rp6e2DUxij3dtTZr0uRv/N8PCgAAAAAAAAAAAAAAAAAA3MDh+Qsxr8U75+zHw9O3iKY6aodClABFAAAAAAQYzDxiLWnPHCWFMaTpPGHSMjNbWxfiqP1ecfkLBRAVAAAAAAAAAAAAAAAAFnL41xlPf5S3GHlvzlPf5S3EpABFAAAAAAFLNaNrC6/tmPt6rqtmM/4dWvV5wDDAaQAAAAAAAAAAAAAAABZy75ynv8pbjCwE6Yynt9JbqVQBAAAAAAAYmZVTOLmJmdI07t0Ntg46dcZV2+iwQAKgAAAAAAAAAAAAAAACfBRPtNMxE7qo5m8hwdGxhqYp6In6pkqgCAAAAAAAwMXExiatqJjWqebrb6pmdG1hJmeMaTH1WDFAVAAAAAAAAAAAAAAAAG5l9e3hKerd9Flm5Pc3VUz2+k+jSZqgAAAAAAAClm1ezhtP3THhv+y6yc2ubV6KY/THjKwUAFQAAAAAAAAAAAAAAABJh702LsVU/wDYbeFv+0WdqI047tWA08nubqqZ7fSfQo0gGVAAAAAAQYvEez2tdNd+nFh3bk3LkzVxmWhnFe+mmOufSPVmtRAAAAAAAAAAAAAAAAAABNhL3IYiJnhwnsQgOlidY3CllVya7GlX6Z0hdZUAAAABWzGuaMJOzz6R9QZWMu8tiZmOHCOyEANIAAAAAAAAAAAAAAAAAAAA2MpjTDT11T5RC6rZfTsYOnr1n6zqssqAAAAK2YxtYOru84WUeIp27FURz0zHgDngGkAAAAAAAAAAAAAAAAAAHqinbriKeMzoUUzXVpREzLVwGC5Gdq78XkC7TGzTERzQ+gyoAAAAADn8Vb5LEVR1+E8ETbx2E9op1p3VRw6+qWPctzaq0uRMS1EeAAAAAAAAAAAAAAB9iNqdKd8r2Hy2a997dHRz/wBAo007c6URMz1L+Hyyat9+dI6I4tGzZps06W4iPOe9ImmI7VmmzTpbiISAigAAAAAAADzctxcp0riJh6AZmIyznsT3T6Sz7lubdWlyJiXRvFy3F2nS5ETC6mOdGjiMs034ee6fSVCuiaKtK4mJ61HkAAAAAAH2N87gfFvC4Gq9vq92nxnshbwWA2I2r++ejmj+19NENjD02I/847+ee9MCKAAAAAAAAAAAAAAAAI71mm9TpciJ/OlIAyMVl8299r3o8Y+6i6VTxmBi/GtG6rwntXUYw9VUzRVMVRpMPKgAA0sqw2vv1933Z1MbVURHGZ0dFbo5O3EU8IjQo9AMqAAAAAAAAAAAAAAAAAAAAAAo5nh9u3t08aePXDIdLMaxvc9ft8leqp6J8OZYiMBRLhfmaP8AanzdACUgAigAAAAAAAAAAAAAAAAAAAAADEzL5yru8oBYKoCsv//Z";

  if (/twitter.com/gi.test(kurd.link)) {
    // https://stackoverflow.com/a/9396453/7003797
    const username = kurd.link.match(
      /https?:\/\/(www\.)?twitter\.com\/(#!\/)?@?([^\/]*)/
    )[3];

    image = `https://res.cloudinary.com/mhmd-azeez/image/twitter_name/${username}.jpg`;
  } else if (/github.com/gi.test(kurd.link)) {
    const username = kurd.link.match(
      /https?:\/\/(www\.)?github\.com\/(#!\/)?@?([^\/]*)/
    )[3];

    image = `https://github.com/${username}.png`;
  } else {
    const username = kurd.link.split("/")[3];
    image = `https://avatars.dicebear.com/api/identicon/${username}.svg`;
  }

  return image;
}
