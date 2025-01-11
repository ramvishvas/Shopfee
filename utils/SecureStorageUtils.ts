import * as SecureStore from "expo-secure-store";

/**
 * Centralized key management for SecureStorage.
 */
export enum SecureStorageKeys {
  AUTH_TOKEN = "AUTH_TOKEN",
  USER_DATA = "USER_DATA",
}

/**
 * SecureStorage utility functions.
 */
export class SecureStorageUtils {
  /**
   * Save a value to SecureStore.
   * @param key The key under which the value will be stored.
   * @param value The value to store.
   */
  static async setItem<T>(key: SecureStorageKeys, value: T): Promise<void> {
    try {
      const jsonValue =
        typeof value === "string" ? value : JSON.stringify(value);
      await SecureStore.setItemAsync(key, jsonValue);
    } catch (error) {
      console.error(`Error setting item with key "${key}":`, error);
    }
  }

  /**
   * Retrieve a value from SecureStore.
   * @param key The key of the value to retrieve.
   * @returns The parsed value or `null` if not found.
   */
  static async getItem<T>(key: SecureStorageKeys): Promise<T | null> {
    try {
      const jsonValue = await SecureStore.getItemAsync(key);
      return jsonValue ? (JSON.parse(jsonValue) as T) : null;
    } catch (error) {
      console.error(`Error getting item with key "${key}":`, error);
      return null;
    }
  }

  /**
   * Remove a value from SecureStore.
   * @param key The key of the value to remove.
   */
  static async removeItem(key: SecureStorageKeys): Promise<void> {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.error(`Error removing item with key "${key}":`, error);
    }
  }

  /**
   * Clear all stored values from SecureStore.
   */
  static async clearAll(): Promise<void> {
    try {
      await Promise.all([
        SecureStorageUtils.removeItem(SecureStorageKeys.AUTH_TOKEN),
        SecureStorageUtils.removeItem(SecureStorageKeys.USER_DATA),
      ]);
    } catch (error) {
      console.error("Error clearing SecureStore:", error);
    }
  }

  /**
   * Save the authentication token.
   * @param token The authentication token.
   */
  static async setToken(token: string): Promise<void> {
    await SecureStorageUtils.setItem(SecureStorageKeys.AUTH_TOKEN, token);
  }

  /**
   * Retrieve the authentication token.
   * @returns The authentication token or `null` if not found.
   */
  static async getToken(): Promise<string | null> {
    return await SecureStorageUtils.getItem<string>(
      SecureStorageKeys.AUTH_TOKEN
    );
  }

  /**
   * Remove the authentication token.
   */
  static async removeToken(): Promise<void> {
    await SecureStorageUtils.removeItem(SecureStorageKeys.AUTH_TOKEN);
  }

  /**
   * Save the user data.
   * @param user The user data to store.
   */
  static async setUser(user: object): Promise<void> {
    await SecureStorageUtils.setItem(SecureStorageKeys.USER_DATA, user);
  }

  /**
   * Retrieve the user data.
   * @returns The user data object or `null` if not found.
   */
  static async getUser<T>(): Promise<T | null> {
    return await SecureStorageUtils.getItem<T>(SecureStorageKeys.USER_DATA);
  }

  /**
   * Remove the user data.
   */
  static async removeUser(): Promise<void> {
    await SecureStorageUtils.removeItem(SecureStorageKeys.USER_DATA);
  }
}
