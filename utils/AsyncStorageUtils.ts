import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Centralized key management for AsyncStorage.
 */
export enum StorageKeys {
  HIDE_SPLASH_SCREEN = "HIDE_SPLASH_SCREEN",
}

/**
 * AsyncStorage utility functions.
 */
class AsyncStorageUtils {
  /**
   * Save a value to AsyncStorage.
   * @param key The key under which the value will be stored.
   * @param value The value to store.
   */
  static async setItem<T>(key: StorageKeys, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error(`Error setting item with key "${key}":`, error);
    }
  }

  /**
   * Retrieve a value from AsyncStorage.
   * @param key The key of the value to retrieve.
   * @returns The parsed value or `null` if not found.
   */
  static async getItem<T>(key: StorageKeys): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error(`Error getting item with key "${key}":`, error);
      return null;
    }
  }

  /**
   * Remove a value from AsyncStorage.
   * @param key The key of the value to remove.
   */
  static async removeItem(key: StorageKeys): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item with key "${key}":`, error);
    }
  }

  /**
   * Clear all keys and values in AsyncStorage.
   */
  static async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  }

  /**
   * Retrieve all keys in AsyncStorage.
   * @returns An array of keys.
   */
  static async getAllKeys(): Promise<string[]> {
    try {
      return (await AsyncStorage.getAllKeys()) as string[];
    } catch (error) {
      console.error("Error getting all keys from AsyncStorage:", error);
      return [];
    }
  }

  /**
   * Multi-get values for multiple keys.
   * @param keys The keys of the values to retrieve.
   * @returns An array of key-value pairs.
   */
  static async multiGet(
    keys: StorageKeys[]
  ): Promise<[string, string | null][]> {
    try {
      return (await AsyncStorage.multiGet(keys)) as [string, string | null][];
    } catch (error) {
      console.error(`Error multi-getting items for keys "${keys}":`, error);
      return [];
    }
  }
}

export default AsyncStorageUtils;
