import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

interface MenuCardProps {
	color: string;
	title: string;
	subtitle?: string;
	onPress?: () => void;
	style?: ViewStyle;
}

const MenuCard: React.FC<MenuCardProps> = ({ color, title, subtitle, onPress, style }) => {
	return (
		<TouchableOpacity style={[styles.card, style]} onPress={onPress} activeOpacity={0.7}>
			<View style={[styles.band, { backgroundColor: color }]}>
				<Text style={styles.bandText}>{title}</Text>
			</View>
			<View style={styles.body}>
				<Text style={styles.bodyTitle}>{title}</Text>
				{!!subtitle && <Text style={styles.bodySubtitle}>{subtitle}</Text>}
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 16,
		overflow: 'hidden',
		backgroundColor: 'transparent',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 8 },
		shadowOpacity: 0.25,
		shadowRadius: 24,
		elevation: 8,
	},
	band: {
		height: 44,
		justifyContent: 'center',
		paddingHorizontal: 12,
	},
	bandText: {
		color: '#fff',
		fontWeight: '900',
		letterSpacing: 0.6,
		textTransform: 'uppercase',
		fontSize: 14,
	},
	body: {
		backgroundColor: '#ffffff',
		paddingHorizontal: 16,
		paddingVertical: 14,
	},
	bodyTitle: {
		color: '#0f172a',
		fontSize: 18,
		fontWeight: '800',
		marginBottom: 4,
	},
	bodySubtitle: {
		color: '#334155',
		fontSize: 13,
		fontWeight: '600',
	},
});

export default MenuCard;


