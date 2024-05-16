import React from 'react'
import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card>
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