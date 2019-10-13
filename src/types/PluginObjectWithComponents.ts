import Vue, { PluginObject } from 'vue';

type PluginObjectWithComponents<T, V extends typeof Vue = typeof Vue> = PluginObject<T> & {
	components?: Record<string, V>
};

export default PluginObjectWithComponents;
