import {
  NewPriceFeed as NewPriceFeedEvent,
  PriceUpdate as PriceUpdateEvent
} from "../generated/PythPriceUpdater/PythPriceUpdater"
import {
  NewPriceFeed,
  PriceUpdate
} from "../generated/schema"

export function handleNewPriceFeed(event: NewPriceFeedEvent): void {
  let entity = new NewPriceFeed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.priceId = event.params.priceId
  entity.priceFeed = event.params.priceFeed

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePriceUpdate(event: PriceUpdateEvent): void {
  let entity = new PriceUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.price = event.params.price
  entity.priceFeed = event.params.priceFeed

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  entity.save()
}
