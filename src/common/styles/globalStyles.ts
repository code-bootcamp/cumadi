import { css } from '@emotion/react'

export const globalStyles = css`
	:root {
		--color-main: #f56040;
		--color-muted: #fff5f5;
		--color-black: #17100a;
		--color-white: #ffffff;
		--color-gray-1: #7e7872;
		--color-gray-2: #a8a8a8;
		--color-gray-3: #d9d9d9;
		--color-gray-4: #f5f5f5;
		--color-error-red: #f54040;

		--base-size: 16px;
		--font-family: 'Noto Sans KR', sans-serif;
	}
	/* prettier-ignore */
	html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, 
  acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, 
  sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, 
  tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, 
  footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, input, textarea, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

	html {
		font-size: var(--base-size);
		font-family: var(--font-family);
	}

	body {
		color: var(--color-black);
		background: var(--color-white);
	}

	ol,
	ul {
		list-style: none;
	}

	a {
		background-color: transparent;
		text-decoration: none;
		outline: none;
		color: inherit;
		&:active,
		&:hover {
			text-decoration: none;
			color: inherit;
			outline: 0;
		}
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		outline: none;
		border: none;
		background: none;
		padding: 0;
		user-select: none;
		cursor: pointer;
		white-space: nowrap;
		letter-spacing: inherit;
		font: inherit;
		color: inherit;
	}
	input {
		outline: none;
	}
`
