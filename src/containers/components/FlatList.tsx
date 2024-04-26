import React from 'react'
import { FlatList as RNFlatList, RefreshControl, Keyboard, ViewStyle, StyleProp, ListRenderItem, ViewToken } from 'react-native'
import { Colors, hp, wp } from '../../utils'
import View from './View'
import { Loader } from '../layout/load'
import EmptyList from '../layout/emptyList'

export type ListProps = {
  /**
    * Rendered in between each item, but not at the top or bottom
    */
  ItemSeparatorComponent?: React.ComponentType<any> | null;

  /**
   * Rendered when the list is empty.
   */
  ListEmptyComponent?: React.ComponentType<any> | React.ReactElement | null;

  /**
   * Rendered at the very end of the list.
   */
  ListFooterComponent?: React.ComponentType<any> | React.ReactElement | null;

  /**
   * Styling for internal View for ListFooterComponent
   */
  ListFooterComponentStyle?: ViewStyle | null;

  /**
   * Rendered at the very beginning of the list.
   */
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;

  /**
   * Styling for internal View for ListHeaderComponent
   */
  ListHeaderComponentStyle?: ViewStyle | null;

  /**
   * Optional custom style for multi-item rows generated when numColumns > 1
   */
  columnWrapperStyle?: StyleProp<ViewStyle>;

  /**
   * Determines when the keyboard should stay visible after a tap.
   * - 'never' (the default), tapping outside of the focused text input when the keyboard is up dismisses the keyboard. When this happens, children won't receive the tap.
   * - 'always', the keyboard will not dismiss automatically, and the scroll view will not catch taps, but children of the scroll view can catch taps.
   * - 'handled', the keyboard will not dismiss automatically when the tap was handled by a children, (or captured by an ancestor).
   * - false, deprecated, use 'never' instead
   * - true, deprecated, use 'always' instead
   */

  /**
   * For simplicity, data is just a plain array. If you want to use something else,
   * like an immutable list, use the underlying VirtualizedList directly.
   */
  data: ReadonlyArray<any> | null | undefined;

  /**
   * A marker property for telling the list to re-render (since it implements PureComponent).
   * If any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the `data` prop,
   * stick it here and treat it immutably.
   */
  extraData?: any;

  /**
   * `getItemLayout` is an optional optimization that lets us skip measurement of dynamic
   * content if you know the height of items a priori. getItemLayout is the most efficient,
   * and is easy to use if you have fixed height items, for example:
   * ```
   * getItemLayout={(data, index) => (
   *   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
   * )}
   * ```
   * Remember to include separator length (height or width) in your offset calculation if you specify
   * `ItemSeparatorComponent`.
   */
  getItemLayout?: (
    data: Array<any> | null | undefined,
    index: number,
  ) => { length: number; offset: number; index: number };

  /**
   * If true, renders items next to each other horizontally instead of stacked vertically.
   */
  horizontal?: boolean | null;

  /**
   * How many items to render in the initial batch
   */
  initialNumToRender?: number;

  /**
   * Instead of starting at the top with the first item, start at initialScrollIndex
   */
  initialScrollIndex?: number | null;

  /**
   * Used to extract a unique key for a given item at the specified index. Key is used for caching
   * and as the react key to track item re-ordering. The default extractor checks `item.key`, then
   * falls back to using the index, like React does.
   */
  keyExtractor?: (item: any, index: number) => string;

  /**
   * Uses legacy MetroListView instead of default VirtualizedSectionList
   */
  legacyImplementation?: boolean;

  /**
   * Multiple columns can only be rendered with `horizontal={false}` and will zig-zag like a `flexWrap` layout.
   * Items should all be the same height - masonry layouts are not supported.
   */
  numColumns?: number;

  /**
   * Called once when the scroll position gets within onEndReachedThreshold of the rendered content.
   */
  onEndReached?: ((info: { distanceFromEnd: number }) => void) | null;

  /**
   * How far from the end (in units of visible length of the list) the bottom edge of the
   * list must be from the end of the content to trigger the `onEndReached` callback.
   * Thus a value of 0.5 will trigger `onEndReached` when the end of the content is
   * within half the visible length of the list.
   */
  onEndReachedThreshold?: number | null;

  /**
   * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality.
   * Make sure to also set the refreshing prop correctly.
   */
  onRefresh?: (() => void) | undefined;

  /**
   * Called when the viewability of rows changes, as defined by the `viewablePercentThreshold` prop.
   */
  onViewableItemsChanged?: ((info: { viewableItems: Array<ViewToken>; changed: Array<ViewToken> }) => void) | null;

  /**
   * Set this true while waiting for new data from a refresh.
   */
  refreshing?: boolean | null;

  /**
   * Takes an item from data and renders it into the list. Typical usage:
   * ```
   * _renderItem = ({item}) => (
   *   <TouchableOpacity onPress={() => this._onPress(item)}>
   *     <Text>{item.title}</Text>
   *   <TouchableOpacity/>
   * );
   * ...
   * <FlatList data={[{title: 'Title Text', key: 'item1'}]} renderItem={this._renderItem} />
   * ```
   * Provides additional metadata like `index` if you need it.
   */
  renderItem: ListRenderItem<any> | null | undefined;

  /**
   * See `ViewabilityHelper` for flow type and further documentation.
   */
  viewabilityConfig?: any;

  /**
   * Note: may have bugs (missing content) in some circumstances - use at your own risk.
   *
   * This may improve scroll performance for large lists.
   */
  removeClippedSubviews?: boolean;

  /**
   * Fades out the edges of the the scroll content.
   *
   * If the value is greater than 0, the fading edges will be set accordingly
   * to the current scroll direction and position,
   * indicating if there is more content to show.
   *
   * The default value is 0.
   * @platform android
   */
  fadingEdgeLength?: number;

  scrollEnabled?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
  onScrollBeginDrag?: any;
  isLoading?: boolean;
  keyboardShouldPersistTaps?: any;
  isScroll?: boolean;
  inverted?: boolean | null | undefined
}

export const List = (props: ListProps) => {
  const {
    numColumns,
    data,
    renderItem,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator,
    keyExtractor = (item: any, index: number) => `${index}`,
    extraData,
    onScrollBeginDrag = Keyboard.dismiss,
    columnWrapperStyle,
    ListEmptyComponent = () => ListEmpty(),
    isLoading = false,
    onRefresh = () => console.log('scroll'),
    initialNumToRender = 10,
    horizontal,
    scrollEnabled,
    keyboardShouldPersistTaps = 'handled',
    isScroll,
    inverted,
    getItemLayout,
    ...otherProps
  } = props

  let isValids = Array.isArray(data)

  if (!isValids && data) {
    return (
      <View alignCenter>
        <View
          backgroundColor={Colors.elements.white}
          width={wp(80)}
          borderRadius={8}
        >
          <EmptyList
            label='Get Data Fail '
            color={Colors.elements.black}
            style={{
              fontSize: hp(1.5),
              fontWeight: 'bold'
            }}
          />
        </View>
      </View>
    )
  }

  if (isValids && isScroll) {
    return (
      <RNFlatList
        numColumns={numColumns}
        horizontal={horizontal}
        data={data || []}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator || false}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
        keyExtractor={keyExtractor}
        extraData={extraData}
        scrollEnabled={scrollEnabled}
        onScrollBeginDrag={onScrollBeginDrag}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        columnWrapperStyle={columnWrapperStyle}
        ListEmptyComponent={ListEmptyComponent}
        initialNumToRender={initialNumToRender}
        inverted={inverted}
        refreshControl={
          <RefreshControl
            colors={[Colors.primary.taptap_yellow_light]}
            tintColor={Colors.primary.taptap_yellow}
            refreshing={isLoading}
            onRefresh={onRefresh}
          />
        }
        {...otherProps}
      />
    )
  } else {
    <RNFlatList
      numColumns={numColumns}
      horizontal={horizontal}
      data={data || []}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      keyExtractor={keyExtractor}
      extraData={extraData}
      scrollEnabled={scrollEnabled}
      onScrollBeginDrag={onScrollBeginDrag}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      columnWrapperStyle={columnWrapperStyle}
      ListEmptyComponent={ListEmptyComponent}
      initialNumToRender={initialNumToRender}
      inverted={inverted}
      {...otherProps}
    />
  }

  return <Loader />
}
const ListEmpty = () => <EmptyList color={Colors.primary.taptap_yellow} />

