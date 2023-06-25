package middleware

import (
	"fmt"
	"net/http"

	"github.com/sudo-adduser-jordan/Toolchain/Go/styles"
)

func Logging(f http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// TODO: add executrion time and status

		fmt.Print(styles.PurpleLabel(" TLS: "))
		fmt.Println(r.TLS)

		fmt.Print(styles.PurpleLabel(" Host: "))
		fmt.Println(r.Host)
		fmt.Print(styles.PurpleLabel(" URL Path: "))
		fmt.Println(r.URL.Path)

		fmt.Print(styles.PurpleLabel(" Request URI: "))
		fmt.Println(r.RequestURI)

		// update colors
		switch r.Method {
		case "GET":
			fmt.Print(styles.BlueLabel(" Method: "))
			fmt.Println(r.Method)
		case "POST":
			fmt.Print(styles.PurpleLabel(" Method: "))
			fmt.Println(r.Method)
		case "DELETE":
			fmt.Print(styles.RedLabel(" Method: "))
			fmt.Println(r.Method)
		case "PUT":
			fmt.Print(styles.PurpleLabel(" Method: "))
			fmt.Println(r.Method)
		}

		fmt.Print(styles.PurpleLabel(" Header: "))
		fmt.Println(r.Header)

		// these return empty nil: fix
		fmt.Print(styles.PurpleLabel(" Body: "))
		fmt.Println(r.Body)
		fmt.Print(styles.PurpleLabel(" Response: "))
		fmt.Println(r.Response)

		f(w, r)
	}
}
