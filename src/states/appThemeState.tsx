import React, { createContext, useCallback, useEffect, useReducer } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyles, DarkTheme } from '../styles'

export type AppThemeState = {
	theme: DefaultTheme
	toggleTheme: () => void
}

type AppThemeActionsTypes = 'SHOW_DARK_MODE' | 'SHOW_LIGHT_MODE'

type AppThemeActions = {
	type: AppThemeActionsTypes
	payload: DefaultTheme
}

type ReducerHandler = {
	[key in AppThemeActionsTypes]: (action: AppThemeActions) => AppThemeState
}

const initialState: AppThemeState = {
	theme: DarkTheme,
	toggleTheme: () => null
}

export const AppThemeContext = createContext<AppThemeState>(initialState)

const reducer = (state: AppThemeState, action: AppThemeActions) => {
	const reducerHandler: ReducerHandler = {
		SHOW_LIGHT_MODE: action => {
			return { ...state, theme: action.payload }
		},
		SHOW_DARK_MODE: action => {
			return { ...state, theme: action.payload }
		}
	}

	return reducerHandler[action.type](action)
}

const AppThemeState = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const toggleTheme = useCallback(() => {
		const darkModeAction: AppThemeActions = {
			type: 'SHOW_DARK_MODE',
			payload: DarkTheme
		}
		dispatch(darkModeAction)
	}, [state.theme.title])

	useEffect(() => {
		const savedTheme = window.localStorage.getItem('wllfariatheme')
		if (!savedTheme) return
		const themeParsed = JSON.parse(savedTheme)
		state.theme.title !== themeParsed && toggleTheme()
	}, [state.theme.title, toggleTheme])

	const contextValue = {
		...state,
		toggleTheme
	}

	return (
		<AppThemeContext.Provider value={contextValue}>
			<ThemeProvider theme={state.theme}>
				<GlobalStyles />
				{children}
			</ThemeProvider>
		</AppThemeContext.Provider>
	)
}

export default AppThemeState