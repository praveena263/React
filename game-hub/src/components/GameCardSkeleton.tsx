import React from 'react'
import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card width='265px' borderRadius={10} overflow="hidden">
        <Skeleton height ='2000px'>
            <CardBody>
                <SkeletonText>

                </SkeletonText>
            </CardBody>
        </Skeleton>
    </Card>
  )
}

export default GameCardSkeleton