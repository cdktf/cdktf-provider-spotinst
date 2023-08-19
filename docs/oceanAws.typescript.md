# `spotinst_ocean_aws`

Refer to the Terraform Registory for docs: [`spotinst_ocean_aws`](https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws).

# `oceanAws` Submodule <a name="`oceanAws` Submodule" id="@cdktf/provider-spotinst.oceanAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAws <a name="OceanAws" id="@cdktf/provider-spotinst.oceanAws.OceanAws"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws spotinst_ocean_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAws(scope: Construct, id: string, config: OceanAwsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig">OceanAwsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig">OceanAwsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler">putAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putBlockDeviceMappings">putBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putClusterOrientation">putClusterOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putInstanceMetadataOptions">putInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putLoadBalancers">putLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putResourceTagSpecification">putResourceTagSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putScheduledTask">putScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy">putUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociateIpv6Address">resetAssociateIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetAutoscaler">resetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlacklist">resetBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlockDeviceMappings">resetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetClusterOrientation">resetClusterOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetControllerId">resetControllerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetDesiredCapacity">resetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetDrainingTimeout">resetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetEbsOptimized">resetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetFallbackToOndemand">resetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetGracePeriod">resetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetInstanceMetadataOptions">resetInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetLoadBalancers">resetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetMonitoring">resetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetResourceTagSpecification">resetResourceTagSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetRootVolumeSize">resetRootVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetScheduledTask">resetScheduledTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpotPercentage">resetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpreadNodesBy">resetSpreadNodesBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUpdatePolicy">resetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUseAsTemplateOnly">resetUseAsTemplateOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeCommitments">resetUtilizeCommitments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeReservedInstances">resetUtilizeReservedInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetWhitelist">resetWhitelist</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAws.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanAws.OceanAws.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanAws.OceanAws.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAutoscaler` <a name="putAutoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler"></a>

```typescript
public putAutoscaler(value: OceanAwsAutoscaler): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

---

##### `putBlockDeviceMappings` <a name="putBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putBlockDeviceMappings"></a>

```typescript
public putBlockDeviceMappings(value: IResolvable | OceanAwsBlockDeviceMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putBlockDeviceMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>[]

---

##### `putClusterOrientation` <a name="putClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putClusterOrientation"></a>

```typescript
public putClusterOrientation(value: IResolvable | OceanAwsClusterOrientation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putClusterOrientation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>[]

---

##### `putFilters` <a name="putFilters" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters"></a>

```typescript
public putFilters(value: OceanAwsFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

---

##### `putInstanceMetadataOptions` <a name="putInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putInstanceMetadataOptions"></a>

```typescript
public putInstanceMetadataOptions(value: OceanAwsInstanceMetadataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putInstanceMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

---

##### `putLoadBalancers` <a name="putLoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLoadBalancers"></a>

```typescript
public putLoadBalancers(value: IResolvable | OceanAwsLoadBalancers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLoadBalancers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>[]

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLogging"></a>

```typescript
public putLogging(value: OceanAwsLogging): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

---

##### `putResourceTagSpecification` <a name="putResourceTagSpecification" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putResourceTagSpecification"></a>

```typescript
public putResourceTagSpecification(value: IResolvable | OceanAwsResourceTagSpecification[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putResourceTagSpecification.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification">OceanAwsResourceTagSpecification</a>[]

---

##### `putScheduledTask` <a name="putScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putScheduledTask"></a>

```typescript
public putScheduledTask(value: IResolvable | OceanAwsScheduledTask[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putScheduledTask.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>[]

---

##### `putTags` <a name="putTags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putTags"></a>

```typescript
public putTags(value: IResolvable | OceanAwsTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>[]

---

##### `putUpdatePolicy` <a name="putUpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy"></a>

```typescript
public putUpdatePolicy(value: OceanAwsUpdatePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

---

##### `resetAssociateIpv6Address` <a name="resetAssociateIpv6Address" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociateIpv6Address"></a>

```typescript
public resetAssociateIpv6Address(): void
```

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociatePublicIpAddress"></a>

```typescript
public resetAssociatePublicIpAddress(): void
```

##### `resetAutoscaler` <a name="resetAutoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetAutoscaler"></a>

```typescript
public resetAutoscaler(): void
```

##### `resetBlacklist` <a name="resetBlacklist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlacklist"></a>

```typescript
public resetBlacklist(): void
```

##### `resetBlockDeviceMappings` <a name="resetBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlockDeviceMappings"></a>

```typescript
public resetBlockDeviceMappings(): void
```

##### `resetClusterOrientation` <a name="resetClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetClusterOrientation"></a>

```typescript
public resetClusterOrientation(): void
```

##### `resetControllerId` <a name="resetControllerId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetControllerId"></a>

```typescript
public resetControllerId(): void
```

##### `resetDesiredCapacity` <a name="resetDesiredCapacity" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetDesiredCapacity"></a>

```typescript
public resetDesiredCapacity(): void
```

##### `resetDrainingTimeout` <a name="resetDrainingTimeout" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetDrainingTimeout"></a>

```typescript
public resetDrainingTimeout(): void
```

##### `resetEbsOptimized` <a name="resetEbsOptimized" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetEbsOptimized"></a>

```typescript
public resetEbsOptimized(): void
```

##### `resetFallbackToOndemand` <a name="resetFallbackToOndemand" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetFallbackToOndemand"></a>

```typescript
public resetFallbackToOndemand(): void
```

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetFilters"></a>

```typescript
public resetFilters(): void
```

##### `resetGracePeriod` <a name="resetGracePeriod" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetGracePeriod"></a>

```typescript
public resetGracePeriod(): void
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetIamInstanceProfile"></a>

```typescript
public resetIamInstanceProfile(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageId` <a name="resetImageId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetInstanceMetadataOptions` <a name="resetInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetInstanceMetadataOptions"></a>

```typescript
public resetInstanceMetadataOptions(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetLoadBalancers` <a name="resetLoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetLoadBalancers"></a>

```typescript
public resetLoadBalancers(): void
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetLogging"></a>

```typescript
public resetLogging(): void
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetMaxSize"></a>

```typescript
public resetMaxSize(): void
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetMinSize"></a>

```typescript
public resetMinSize(): void
```

##### `resetMonitoring` <a name="resetMonitoring" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetMonitoring"></a>

```typescript
public resetMonitoring(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResourceTagSpecification` <a name="resetResourceTagSpecification" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetResourceTagSpecification"></a>

```typescript
public resetResourceTagSpecification(): void
```

##### `resetRootVolumeSize` <a name="resetRootVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetRootVolumeSize"></a>

```typescript
public resetRootVolumeSize(): void
```

##### `resetScheduledTask` <a name="resetScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetScheduledTask"></a>

```typescript
public resetScheduledTask(): void
```

##### `resetSpotPercentage` <a name="resetSpotPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpotPercentage"></a>

```typescript
public resetSpotPercentage(): void
```

##### `resetSpreadNodesBy` <a name="resetSpreadNodesBy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpreadNodesBy"></a>

```typescript
public resetSpreadNodesBy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUpdatePolicy` <a name="resetUpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUpdatePolicy"></a>

```typescript
public resetUpdatePolicy(): void
```

##### `resetUseAsTemplateOnly` <a name="resetUseAsTemplateOnly" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUseAsTemplateOnly"></a>

```typescript
public resetUseAsTemplateOnly(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUserData"></a>

```typescript
public resetUserData(): void
```

##### `resetUtilizeCommitments` <a name="resetUtilizeCommitments" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeCommitments"></a>

```typescript
public resetUtilizeCommitments(): void
```

##### `resetUtilizeReservedInstances` <a name="resetUtilizeReservedInstances" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeReservedInstances"></a>

```typescript
public resetUtilizeReservedInstances(): void
```

##### `resetWhitelist` <a name="resetWhitelist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetWhitelist"></a>

```typescript
public resetWhitelist(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isConstruct"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

oceanAws.OceanAws.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformElement"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

oceanAws.OceanAws.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformResource"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

oceanAws.OceanAws.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference">OceanAwsAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList">OceanAwsBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientation">clusterOrientation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList">OceanAwsClusterOrientationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference">OceanAwsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptions">instanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference">OceanAwsInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancers">loadBalancers</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList">OceanAwsLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference">OceanAwsLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.resourceTagSpecification">resourceTagSpecification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList">OceanAwsResourceTagSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTask">scheduledTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList">OceanAwsScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList">OceanAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference">OceanAwsUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associateIpv6AddressInput">associateIpv6AddressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscalerInput">autoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklistInput">blacklistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blockDeviceMappingsInput">blockDeviceMappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientationInput">clusterOrientationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerIdInput">controllerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeoutInput">drainingTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimizedInput">ebsOptimizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemandInput">fallbackToOndemandInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.filtersInput">filtersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriodInput">gracePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptionsInput">instanceMetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancersInput">loadBalancersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.loggingInput">loggingInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoringInput">monitoringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.resourceTagSpecificationInput">resourceTagSpecificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification">OceanAwsResourceTagSpecification</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSizeInput">rootVolumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTaskInput">scheduledTaskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentageInput">spotPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesByInput">spreadNodesByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicyInput">updatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnlyInput">useAsTemplateOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitmentsInput">utilizeCommitmentsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstancesInput">utilizeReservedInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelistInput">whitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associateIpv6Address">associateIpv6Address</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklist">blacklist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerId">controllerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriod">gracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoring">monitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSize">rootVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentage">spotPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesBy">spreadNodesBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnly">useAsTemplateOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitments">utilizeCommitments</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstances">utilizeReservedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelist">whitelist</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaler`<sup>Required</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscaler"></a>

```typescript
public readonly autoscaler: OceanAwsAutoscalerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference">OceanAwsAutoscalerOutputReference</a>

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: OceanAwsBlockDeviceMappingsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList">OceanAwsBlockDeviceMappingsList</a>

---

##### `clusterOrientation`<sup>Required</sup> <a name="clusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientation"></a>

```typescript
public readonly clusterOrientation: OceanAwsClusterOrientationList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList">OceanAwsClusterOrientationList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.filters"></a>

```typescript
public readonly filters: OceanAwsFiltersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference">OceanAwsFiltersOutputReference</a>

---

##### `instanceMetadataOptions`<sup>Required</sup> <a name="instanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptions"></a>

```typescript
public readonly instanceMetadataOptions: OceanAwsInstanceMetadataOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference">OceanAwsInstanceMetadataOptionsOutputReference</a>

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancers"></a>

```typescript
public readonly loadBalancers: OceanAwsLoadBalancersList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList">OceanAwsLoadBalancersList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.logging"></a>

```typescript
public readonly logging: OceanAwsLoggingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference">OceanAwsLoggingOutputReference</a>

---

##### `resourceTagSpecification`<sup>Required</sup> <a name="resourceTagSpecification" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.resourceTagSpecification"></a>

```typescript
public readonly resourceTagSpecification: OceanAwsResourceTagSpecificationList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList">OceanAwsResourceTagSpecificationList</a>

---

##### `scheduledTask`<sup>Required</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTask"></a>

```typescript
public readonly scheduledTask: OceanAwsScheduledTaskList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList">OceanAwsScheduledTaskList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.tags"></a>

```typescript
public readonly tags: OceanAwsTagsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList">OceanAwsTagsList</a>

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: OceanAwsUpdatePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference">OceanAwsUpdatePolicyOutputReference</a>

---

##### `associateIpv6AddressInput`<sup>Optional</sup> <a name="associateIpv6AddressInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associateIpv6AddressInput"></a>

```typescript
public readonly associateIpv6AddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddressInput"></a>

```typescript
public readonly associatePublicIpAddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoscalerInput`<sup>Optional</sup> <a name="autoscalerInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscalerInput"></a>

```typescript
public readonly autoscalerInput: OceanAwsAutoscaler;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

---

##### `blacklistInput`<sup>Optional</sup> <a name="blacklistInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklistInput"></a>

```typescript
public readonly blacklistInput: string[];
```

- *Type:* string[]

---

##### `blockDeviceMappingsInput`<sup>Optional</sup> <a name="blockDeviceMappingsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blockDeviceMappingsInput"></a>

```typescript
public readonly blockDeviceMappingsInput: IResolvable | OceanAwsBlockDeviceMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>[]

---

##### `clusterOrientationInput`<sup>Optional</sup> <a name="clusterOrientationInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientationInput"></a>

```typescript
public readonly clusterOrientationInput: IResolvable | OceanAwsClusterOrientation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>[]

---

##### `controllerIdInput`<sup>Optional</sup> <a name="controllerIdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerIdInput"></a>

```typescript
public readonly controllerIdInput: string;
```

- *Type:* string

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacityInput"></a>

```typescript
public readonly desiredCapacityInput: number;
```

- *Type:* number

---

##### `drainingTimeoutInput`<sup>Optional</sup> <a name="drainingTimeoutInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeoutInput"></a>

```typescript
public readonly drainingTimeoutInput: number;
```

- *Type:* number

---

##### `ebsOptimizedInput`<sup>Optional</sup> <a name="ebsOptimizedInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimizedInput"></a>

```typescript
public readonly ebsOptimizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fallbackToOndemandInput`<sup>Optional</sup> <a name="fallbackToOndemandInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemandInput"></a>

```typescript
public readonly fallbackToOndemandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.filtersInput"></a>

```typescript
public readonly filtersInput: OceanAwsFilters;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

---

##### `gracePeriodInput`<sup>Optional</sup> <a name="gracePeriodInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriodInput"></a>

```typescript
public readonly gracePeriodInput: number;
```

- *Type:* number

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfileInput"></a>

```typescript
public readonly iamInstanceProfileInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `instanceMetadataOptionsInput`<sup>Optional</sup> <a name="instanceMetadataOptionsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptionsInput"></a>

```typescript
public readonly instanceMetadataOptionsInput: OceanAwsInstanceMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `loadBalancersInput`<sup>Optional</sup> <a name="loadBalancersInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancersInput"></a>

```typescript
public readonly loadBalancersInput: IResolvable | OceanAwsLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>[]

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.loggingInput"></a>

```typescript
public readonly loggingInput: OceanAwsLogging;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `monitoringInput`<sup>Optional</sup> <a name="monitoringInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoringInput"></a>

```typescript
public readonly monitoringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceTagSpecificationInput`<sup>Optional</sup> <a name="resourceTagSpecificationInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.resourceTagSpecificationInput"></a>

```typescript
public readonly resourceTagSpecificationInput: IResolvable | OceanAwsResourceTagSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification">OceanAwsResourceTagSpecification</a>[]

---

##### `rootVolumeSizeInput`<sup>Optional</sup> <a name="rootVolumeSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSizeInput"></a>

```typescript
public readonly rootVolumeSizeInput: number;
```

- *Type:* number

---

##### `scheduledTaskInput`<sup>Optional</sup> <a name="scheduledTaskInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTaskInput"></a>

```typescript
public readonly scheduledTaskInput: IResolvable | OceanAwsScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>[]

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `spotPercentageInput`<sup>Optional</sup> <a name="spotPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentageInput"></a>

```typescript
public readonly spotPercentageInput: number;
```

- *Type:* number

---

##### `spreadNodesByInput`<sup>Optional</sup> <a name="spreadNodesByInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesByInput"></a>

```typescript
public readonly spreadNodesByInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OceanAwsTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>[]

---

##### `updatePolicyInput`<sup>Optional</sup> <a name="updatePolicyInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicyInput"></a>

```typescript
public readonly updatePolicyInput: OceanAwsUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

---

##### `useAsTemplateOnlyInput`<sup>Optional</sup> <a name="useAsTemplateOnlyInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnlyInput"></a>

```typescript
public readonly useAsTemplateOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `utilizeCommitmentsInput`<sup>Optional</sup> <a name="utilizeCommitmentsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitmentsInput"></a>

```typescript
public readonly utilizeCommitmentsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `utilizeReservedInstancesInput`<sup>Optional</sup> <a name="utilizeReservedInstancesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstancesInput"></a>

```typescript
public readonly utilizeReservedInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `whitelistInput`<sup>Optional</sup> <a name="whitelistInput" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelistInput"></a>

```typescript
public readonly whitelistInput: string[];
```

- *Type:* string[]

---

##### `associateIpv6Address`<sup>Required</sup> <a name="associateIpv6Address" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associateIpv6Address"></a>

```typescript
public readonly associateIpv6Address: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blacklist`<sup>Required</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklist"></a>

```typescript
public readonly blacklist: string[];
```

- *Type:* string[]

---

##### `controllerId`<sup>Required</sup> <a name="controllerId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerId"></a>

```typescript
public readonly controllerId: string;
```

- *Type:* string

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

---

##### `drainingTimeout`<sup>Required</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fallbackToOndemand`<sup>Required</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemand"></a>

```typescript
public readonly fallbackToOndemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: number;
```

- *Type:* number

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoring"></a>

```typescript
public readonly monitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `rootVolumeSize`<sup>Required</sup> <a name="rootVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSize"></a>

```typescript
public readonly rootVolumeSize: number;
```

- *Type:* number

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `spotPercentage`<sup>Required</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentage"></a>

```typescript
public readonly spotPercentage: number;
```

- *Type:* number

---

##### `spreadNodesBy`<sup>Required</sup> <a name="spreadNodesBy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesBy"></a>

```typescript
public readonly spreadNodesBy: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `useAsTemplateOnly`<sup>Required</sup> <a name="useAsTemplateOnly" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnly"></a>

```typescript
public readonly useAsTemplateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `utilizeCommitments`<sup>Required</sup> <a name="utilizeCommitments" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitments"></a>

```typescript
public readonly utilizeCommitments: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `utilizeReservedInstances`<sup>Required</sup> <a name="utilizeReservedInstances" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstances"></a>

```typescript
public readonly utilizeReservedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `whitelist`<sup>Required</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelist"></a>

```typescript
public readonly whitelist: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAwsAutoscaler <a name="OceanAwsAutoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsAutoscaler: oceanAws.OceanAwsAutoscaler = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#auto_headroom_percentage OceanAws#auto_headroom_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleCooldown">autoscaleCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#autoscale_cooldown OceanAws#autoscale_cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsAutoConfig">autoscaleIsAutoConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#autoscale_is_auto_config OceanAws#autoscale_is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#autoscale_is_enabled OceanAws#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.enableAutomaticAndManualHeadroom">enableAutomaticAndManualHeadroom</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#enable_automatic_and_manual_headroom OceanAws#enable_automatic_and_manual_headroom}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.extendedResourceDefinitions">extendedResourceDefinitions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#extended_resource_definitions OceanAws#extended_resource_definitions}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a></code> | resource_limits block. |

---

##### `autoHeadroomPercentage`<sup>Optional</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoHeadroomPercentage"></a>

```typescript
public readonly autoHeadroomPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#auto_headroom_percentage OceanAws#auto_headroom_percentage}.

---

##### `autoscaleCooldown`<sup>Optional</sup> <a name="autoscaleCooldown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleCooldown"></a>

```typescript
public readonly autoscaleCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#autoscale_cooldown OceanAws#autoscale_cooldown}.

---

##### `autoscaleDown`<sup>Optional</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleDown"></a>

```typescript
public readonly autoscaleDown: OceanAwsAutoscalerAutoscaleDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#autoscale_down OceanAws#autoscale_down}

---

##### `autoscaleHeadroom`<sup>Optional</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleHeadroom"></a>

```typescript
public readonly autoscaleHeadroom: OceanAwsAutoscalerAutoscaleHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#autoscale_headroom OceanAws#autoscale_headroom}

---

##### `autoscaleIsAutoConfig`<sup>Optional</sup> <a name="autoscaleIsAutoConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsAutoConfig"></a>

```typescript
public readonly autoscaleIsAutoConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#autoscale_is_auto_config OceanAws#autoscale_is_auto_config}.

---

##### `autoscaleIsEnabled`<sup>Optional</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsEnabled"></a>

```typescript
public readonly autoscaleIsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#autoscale_is_enabled OceanAws#autoscale_is_enabled}.

---

##### `enableAutomaticAndManualHeadroom`<sup>Optional</sup> <a name="enableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.enableAutomaticAndManualHeadroom"></a>

```typescript
public readonly enableAutomaticAndManualHeadroom: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#enable_automatic_and_manual_headroom OceanAws#enable_automatic_and_manual_headroom}.

---

##### `extendedResourceDefinitions`<sup>Optional</sup> <a name="extendedResourceDefinitions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.extendedResourceDefinitions"></a>

```typescript
public readonly extendedResourceDefinitions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#extended_resource_definitions OceanAws#extended_resource_definitions}.

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.resourceLimits"></a>

```typescript
public readonly resourceLimits: OceanAwsAutoscalerResourceLimits;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#resource_limits OceanAws#resource_limits}

---

### OceanAwsAutoscalerAutoscaleDown <a name="OceanAwsAutoscalerAutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsAutoscalerAutoscaleDown: oceanAws.OceanAwsAutoscalerAutoscaleDown = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#evaluation_periods OceanAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_scale_down_percentage OceanAws#max_scale_down_percentage}. |

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#evaluation_periods OceanAws#evaluation_periods}.

---

##### `maxScaleDownPercentage`<sup>Optional</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.maxScaleDownPercentage"></a>

```typescript
public readonly maxScaleDownPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_scale_down_percentage OceanAws#max_scale_down_percentage}.

---

### OceanAwsAutoscalerAutoscaleHeadroom <a name="OceanAwsAutoscalerAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsAutoscalerAutoscaleHeadroom: oceanAws.OceanAwsAutoscalerAutoscaleHeadroom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#cpu_per_unit OceanAws#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#gpu_per_unit OceanAws#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#memory_per_unit OceanAws#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#num_of_units OceanAws#num_of_units}. |

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#cpu_per_unit OceanAws#cpu_per_unit}.

---

##### `gpuPerUnit`<sup>Optional</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#gpu_per_unit OceanAws#gpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#memory_per_unit OceanAws#memory_per_unit}.

---

##### `numOfUnits`<sup>Optional</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#num_of_units OceanAws#num_of_units}.

---

### OceanAwsAutoscalerResourceLimits <a name="OceanAwsAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsAutoscalerResourceLimits: oceanAws.OceanAwsAutoscalerResourceLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxMemoryGib">maxMemoryGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxVcpu">maxVcpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}. |

---

##### `maxMemoryGib`<sup>Optional</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxMemoryGib"></a>

```typescript
public readonly maxMemoryGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}.

---

##### `maxVcpu`<sup>Optional</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxVcpu"></a>

```typescript
public readonly maxVcpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}.

---

### OceanAwsBlockDeviceMappings <a name="OceanAwsBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsBlockDeviceMappings: oceanAws.OceanAwsBlockDeviceMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#device_name OceanAws#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a></code> | ebs block. |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#device_name OceanAws#device_name}.

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.property.ebs"></a>

```typescript
public readonly ebs: OceanAwsBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#ebs OceanAws#ebs}

---

### OceanAwsBlockDeviceMappingsEbs <a name="OceanAwsBlockDeviceMappingsEbs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsBlockDeviceMappingsEbs: oceanAws.OceanAwsBlockDeviceMappingsEbs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#delete_on_termination OceanAws#delete_on_termination}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.dynamicVolumeSize">dynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | dynamic_volume_size block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#encrypted OceanAws#encrypted}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#iops OceanAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#kms_key_id OceanAws#kms_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#snapshot_id OceanAws#snapshot_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#throughput OceanAws#throughput}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#volume_size OceanAws#volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#volume_type OceanAws#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#delete_on_termination OceanAws#delete_on_termination}.

---

##### `dynamicVolumeSize`<sup>Optional</sup> <a name="dynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.dynamicVolumeSize"></a>

```typescript
public readonly dynamicVolumeSize: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a>

dynamic_volume_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#dynamic_volume_size OceanAws#dynamic_volume_size}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#encrypted OceanAws#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#iops OceanAws#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#kms_key_id OceanAws#kms_key_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#snapshot_id OceanAws#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#throughput OceanAws#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#volume_size OceanAws#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#volume_type OceanAws#volume_type}.

---

### OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize <a name="OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsBlockDeviceMappingsEbsDynamicVolumeSize: oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize">baseSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#base_size OceanAws#base_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.resource">resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#resource OceanAws#resource}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit">sizePerResourceUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#size_per_resource_unit OceanAws#size_per_resource_unit}. |

---

##### `baseSize`<sup>Required</sup> <a name="baseSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize"></a>

```typescript
public readonly baseSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#base_size OceanAws#base_size}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#resource OceanAws#resource}.

---

##### `sizePerResourceUnit`<sup>Required</sup> <a name="sizePerResourceUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit"></a>

```typescript
public readonly sizePerResourceUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#size_per_resource_unit OceanAws#size_per_resource_unit}.

---

### OceanAwsClusterOrientation <a name="OceanAwsClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsClusterOrientation: oceanAws.OceanAwsClusterOrientation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation.property.availabilityVsCost">availabilityVsCost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#availability_vs_cost OceanAws#availability_vs_cost}. |

---

##### `availabilityVsCost`<sup>Optional</sup> <a name="availabilityVsCost" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation.property.availabilityVsCost"></a>

```typescript
public readonly availabilityVsCost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#availability_vs_cost OceanAws#availability_vs_cost}.

---

### OceanAwsConfig <a name="OceanAwsConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsConfig: oceanAws.OceanAwsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#security_groups OceanAws#security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#subnet_ids OceanAws#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associateIpv6Address">associateIpv6Address</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#associate_ipv6_address OceanAws#associate_ipv6_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#associate_public_ip_address OceanAws#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blacklist">blacklist</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#blacklist OceanAws#blacklist}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>[]</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.clusterOrientation">clusterOrientation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>[]</code> | cluster_orientation block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.controllerId">controllerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#controller_id OceanAws#controller_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#desired_capacity OceanAws#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#draining_timeout OceanAws#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.ebsOptimized">ebsOptimized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#ebs_optimized OceanAws#ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#fallback_to_ondemand OceanAws#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.gracePeriod">gracePeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#grace_period OceanAws#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#iam_instance_profile OceanAws#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#id OceanAws#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#image_id OceanAws#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.instanceMetadataOptions">instanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#key_name OceanAws#key_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.loadBalancers">loadBalancers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>[]</code> | load_balancers block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.maxSize">maxSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_size OceanAws#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.minSize">minSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#min_size OceanAws#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.monitoring">monitoring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#monitoring OceanAws#monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#name OceanAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#region OceanAws#region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.resourceTagSpecification">resourceTagSpecification</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification">OceanAwsResourceTagSpecification</a>[]</code> | resource_tag_specification block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.rootVolumeSize">rootVolumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#root_volume_size OceanAws#root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.scheduledTask">scheduledTask</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>[]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spotPercentage">spotPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#spot_percentage OceanAws#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spreadNodesBy">spreadNodesBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#spread_nodes_by OceanAws#spread_nodes_by}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>[]</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.useAsTemplateOnly">useAsTemplateOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#use_as_template_only OceanAws#use_as_template_only}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#user_data OceanAws#user_data}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeCommitments">utilizeCommitments</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#utilize_commitments OceanAws#utilize_commitments}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeReservedInstances">utilizeReservedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#utilize_reserved_instances OceanAws#utilize_reserved_instances}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.whitelist">whitelist</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#whitelist OceanAws#whitelist}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#security_groups OceanAws#security_groups}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#subnet_ids OceanAws#subnet_ids}.

---

##### `associateIpv6Address`<sup>Optional</sup> <a name="associateIpv6Address" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associateIpv6Address"></a>

```typescript
public readonly associateIpv6Address: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#associate_ipv6_address OceanAws#associate_ipv6_address}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#associate_public_ip_address OceanAws#associate_public_ip_address}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.autoscaler"></a>

```typescript
public readonly autoscaler: OceanAwsAutoscaler;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#autoscaler OceanAws#autoscaler}

---

##### `blacklist`<sup>Optional</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blacklist"></a>

```typescript
public readonly blacklist: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#blacklist OceanAws#blacklist}.

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IResolvable | OceanAwsBlockDeviceMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>[]

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#block_device_mappings OceanAws#block_device_mappings}

---

##### `clusterOrientation`<sup>Optional</sup> <a name="clusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.clusterOrientation"></a>

```typescript
public readonly clusterOrientation: IResolvable | OceanAwsClusterOrientation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>[]

cluster_orientation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#cluster_orientation OceanAws#cluster_orientation}

---

##### `controllerId`<sup>Optional</sup> <a name="controllerId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.controllerId"></a>

```typescript
public readonly controllerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#controller_id OceanAws#controller_id}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#desired_capacity OceanAws#desired_capacity}.

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#draining_timeout OceanAws#draining_timeout}.

---

##### `ebsOptimized`<sup>Optional</sup> <a name="ebsOptimized" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#ebs_optimized OceanAws#ebs_optimized}.

---

##### `fallbackToOndemand`<sup>Optional</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.fallbackToOndemand"></a>

```typescript
public readonly fallbackToOndemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#fallback_to_ondemand OceanAws#fallback_to_ondemand}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.filters"></a>

```typescript
public readonly filters: OceanAwsFilters;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#filters OceanAws#filters}

---

##### `gracePeriod`<sup>Optional</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#grace_period OceanAws#grace_period}.

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#iam_instance_profile OceanAws#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#id OceanAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#image_id OceanAws#image_id}.

---

##### `instanceMetadataOptions`<sup>Optional</sup> <a name="instanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.instanceMetadataOptions"></a>

```typescript
public readonly instanceMetadataOptions: OceanAwsInstanceMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#instance_metadata_options OceanAws#instance_metadata_options}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#key_name OceanAws#key_name}.

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.loadBalancers"></a>

```typescript
public readonly loadBalancers: IResolvable | OceanAwsLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>[]

load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#load_balancers OceanAws#load_balancers}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.logging"></a>

```typescript
public readonly logging: OceanAwsLogging;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#logging OceanAws#logging}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_size OceanAws#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#min_size OceanAws#min_size}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.monitoring"></a>

```typescript
public readonly monitoring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#monitoring OceanAws#monitoring}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#name OceanAws#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#region OceanAws#region}.

---

##### `resourceTagSpecification`<sup>Optional</sup> <a name="resourceTagSpecification" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.resourceTagSpecification"></a>

```typescript
public readonly resourceTagSpecification: IResolvable | OceanAwsResourceTagSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification">OceanAwsResourceTagSpecification</a>[]

resource_tag_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#resource_tag_specification OceanAws#resource_tag_specification}

---

##### `rootVolumeSize`<sup>Optional</sup> <a name="rootVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.rootVolumeSize"></a>

```typescript
public readonly rootVolumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#root_volume_size OceanAws#root_volume_size}.

---

##### `scheduledTask`<sup>Optional</sup> <a name="scheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.scheduledTask"></a>

```typescript
public readonly scheduledTask: IResolvable | OceanAwsScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>[]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#scheduled_task OceanAws#scheduled_task}

---

##### `spotPercentage`<sup>Optional</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spotPercentage"></a>

```typescript
public readonly spotPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#spot_percentage OceanAws#spot_percentage}.

---

##### `spreadNodesBy`<sup>Optional</sup> <a name="spreadNodesBy" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spreadNodesBy"></a>

```typescript
public readonly spreadNodesBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#spread_nodes_by OceanAws#spread_nodes_by}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | OceanAwsTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#tags OceanAws#tags}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: OceanAwsUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#update_policy OceanAws#update_policy}

---

##### `useAsTemplateOnly`<sup>Optional</sup> <a name="useAsTemplateOnly" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.useAsTemplateOnly"></a>

```typescript
public readonly useAsTemplateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#use_as_template_only OceanAws#use_as_template_only}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#user_data OceanAws#user_data}.

---

##### `utilizeCommitments`<sup>Optional</sup> <a name="utilizeCommitments" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeCommitments"></a>

```typescript
public readonly utilizeCommitments: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#utilize_commitments OceanAws#utilize_commitments}.

---

##### `utilizeReservedInstances`<sup>Optional</sup> <a name="utilizeReservedInstances" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeReservedInstances"></a>

```typescript
public readonly utilizeReservedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#utilize_reserved_instances OceanAws#utilize_reserved_instances}.

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.whitelist"></a>

```typescript
public readonly whitelist: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#whitelist OceanAws#whitelist}.

---

### OceanAwsFilters <a name="OceanAwsFilters" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsFilters: oceanAws.OceanAwsFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.architectures">architectures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#architectures OceanAws#architectures}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.categories">categories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#categories OceanAws#categories}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.diskTypes">diskTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#disk_types OceanAws#disk_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeFamilies">excludeFamilies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#exclude_families OceanAws#exclude_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeMetal">excludeMetal</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#exclude_metal OceanAws#exclude_metal}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.hypervisor">hypervisor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#hypervisor OceanAws#hypervisor}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.includeFamilies">includeFamilies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#include_families OceanAws#include_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.isEnaSupported">isEnaSupported</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#is_ena_supported OceanAws#is_ena_supported}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxGpu">maxGpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_gpu OceanAws#max_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxMemoryGib">maxMemoryGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxNetworkPerformance">maxNetworkPerformance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_network_performance OceanAws#max_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxVcpu">maxVcpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minEnis">minEnis</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#min_enis OceanAws#min_enis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minGpu">minGpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#min_gpu OceanAws#min_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minMemoryGib">minMemoryGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#min_memory_gib OceanAws#min_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minNetworkPerformance">minNetworkPerformance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#min_network_performance OceanAws#min_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minVcpu">minVcpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#min_vcpu OceanAws#min_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.rootDeviceTypes">rootDeviceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#root_device_types OceanAws#root_device_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.virtualizationTypes">virtualizationTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#virtualization_types OceanAws#virtualization_types}. |

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#architectures OceanAws#architectures}.

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.categories"></a>

```typescript
public readonly categories: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#categories OceanAws#categories}.

---

##### `diskTypes`<sup>Optional</sup> <a name="diskTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.diskTypes"></a>

```typescript
public readonly diskTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#disk_types OceanAws#disk_types}.

---

##### `excludeFamilies`<sup>Optional</sup> <a name="excludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeFamilies"></a>

```typescript
public readonly excludeFamilies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#exclude_families OceanAws#exclude_families}.

---

##### `excludeMetal`<sup>Optional</sup> <a name="excludeMetal" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeMetal"></a>

```typescript
public readonly excludeMetal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#exclude_metal OceanAws#exclude_metal}.

---

##### `hypervisor`<sup>Optional</sup> <a name="hypervisor" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.hypervisor"></a>

```typescript
public readonly hypervisor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#hypervisor OceanAws#hypervisor}.

---

##### `includeFamilies`<sup>Optional</sup> <a name="includeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.includeFamilies"></a>

```typescript
public readonly includeFamilies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#include_families OceanAws#include_families}.

---

##### `isEnaSupported`<sup>Optional</sup> <a name="isEnaSupported" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.isEnaSupported"></a>

```typescript
public readonly isEnaSupported: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#is_ena_supported OceanAws#is_ena_supported}.

---

##### `maxGpu`<sup>Optional</sup> <a name="maxGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxGpu"></a>

```typescript
public readonly maxGpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_gpu OceanAws#max_gpu}.

---

##### `maxMemoryGib`<sup>Optional</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxMemoryGib"></a>

```typescript
public readonly maxMemoryGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}.

---

##### `maxNetworkPerformance`<sup>Optional</sup> <a name="maxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxNetworkPerformance"></a>

```typescript
public readonly maxNetworkPerformance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_network_performance OceanAws#max_network_performance}.

---

##### `maxVcpu`<sup>Optional</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxVcpu"></a>

```typescript
public readonly maxVcpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}.

---

##### `minEnis`<sup>Optional</sup> <a name="minEnis" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minEnis"></a>

```typescript
public readonly minEnis: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#min_enis OceanAws#min_enis}.

---

##### `minGpu`<sup>Optional</sup> <a name="minGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minGpu"></a>

```typescript
public readonly minGpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#min_gpu OceanAws#min_gpu}.

---

##### `minMemoryGib`<sup>Optional</sup> <a name="minMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minMemoryGib"></a>

```typescript
public readonly minMemoryGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#min_memory_gib OceanAws#min_memory_gib}.

---

##### `minNetworkPerformance`<sup>Optional</sup> <a name="minNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minNetworkPerformance"></a>

```typescript
public readonly minNetworkPerformance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#min_network_performance OceanAws#min_network_performance}.

---

##### `minVcpu`<sup>Optional</sup> <a name="minVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minVcpu"></a>

```typescript
public readonly minVcpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#min_vcpu OceanAws#min_vcpu}.

---

##### `rootDeviceTypes`<sup>Optional</sup> <a name="rootDeviceTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.rootDeviceTypes"></a>

```typescript
public readonly rootDeviceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#root_device_types OceanAws#root_device_types}.

---

##### `virtualizationTypes`<sup>Optional</sup> <a name="virtualizationTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.virtualizationTypes"></a>

```typescript
public readonly virtualizationTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#virtualization_types OceanAws#virtualization_types}.

---

### OceanAwsInstanceMetadataOptions <a name="OceanAwsInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsInstanceMetadataOptions: oceanAws.OceanAwsInstanceMetadataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#http_tokens OceanAws#http_tokens}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#http_put_response_hop_limit OceanAws#http_put_response_hop_limit}. |

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#http_tokens OceanAws#http_tokens}.

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#http_put_response_hop_limit OceanAws#http_put_response_hop_limit}.

---

### OceanAwsLoadBalancers <a name="OceanAwsLoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsLoadBalancers: oceanAws.OceanAwsLoadBalancers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#arn OceanAws#arn}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#name OceanAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#type OceanAws#type}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#arn OceanAws#arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#name OceanAws#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#type OceanAws#type}.

---

### OceanAwsLogging <a name="OceanAwsLogging" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLogging.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsLogging: oceanAws.OceanAwsLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging.property.export">export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a></code> | export block. |

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLogging.property.export"></a>

```typescript
public readonly export: OceanAwsLoggingExport;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#export OceanAws#export}

---

### OceanAwsLoggingExport <a name="OceanAwsLoggingExport" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsLoggingExport: oceanAws.OceanAwsLoggingExport = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport.property.s3">s3</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>[]</code> | s3 block. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport.property.s3"></a>

```typescript
public readonly s3: IResolvable | OceanAwsLoggingExportS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>[]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#s3 OceanAws#s3}

---

### OceanAwsLoggingExportS3 <a name="OceanAwsLoggingExportS3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsLoggingExportS3: oceanAws.OceanAwsLoggingExportS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#id OceanAws#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#id OceanAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OceanAwsResourceTagSpecification <a name="OceanAwsResourceTagSpecification" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsResourceTagSpecification: oceanAws.OceanAwsResourceTagSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification.property.shouldTagVolumes">shouldTagVolumes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#should_tag_volumes OceanAws#should_tag_volumes}. |

---

##### `shouldTagVolumes`<sup>Optional</sup> <a name="shouldTagVolumes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification.property.shouldTagVolumes"></a>

```typescript
public readonly shouldTagVolumes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#should_tag_volumes OceanAws#should_tag_volumes}.

---

### OceanAwsScheduledTask <a name="OceanAwsScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsScheduledTask: oceanAws.OceanAwsScheduledTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.shutdownHours">shutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a></code> | shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.tasks">tasks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>[]</code> | tasks block. |

---

##### `shutdownHours`<sup>Optional</sup> <a name="shutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.shutdownHours"></a>

```typescript
public readonly shutdownHours: OceanAwsScheduledTaskShutdownHours;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#shutdown_hours OceanAws#shutdown_hours}

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.tasks"></a>

```typescript
public readonly tasks: IResolvable | OceanAwsScheduledTaskTasks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>[]

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#tasks OceanAws#tasks}

---

### OceanAwsScheduledTaskShutdownHours <a name="OceanAwsScheduledTaskShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsScheduledTaskShutdownHours: oceanAws.OceanAwsScheduledTaskShutdownHours = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.timeWindows">timeWindows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#time_windows OceanAws#time_windows}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}. |

---

##### `timeWindows`<sup>Required</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.timeWindows"></a>

```typescript
public readonly timeWindows: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#time_windows OceanAws#time_windows}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}.

---

### OceanAwsScheduledTaskTasks <a name="OceanAwsScheduledTaskTasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsScheduledTaskTasks: oceanAws.OceanAwsScheduledTaskTasks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#cron_expression OceanAws#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.taskType">taskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#task_type OceanAws#task_type}. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#cron_expression OceanAws#cron_expression}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#task_type OceanAws#task_type}.

---

### OceanAwsTags <a name="OceanAwsTags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsTags: oceanAws.OceanAwsTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#key OceanAws#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#value OceanAws#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#key OceanAws#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#value OceanAws#value}.

---

### OceanAwsUpdatePolicy <a name="OceanAwsUpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsUpdatePolicy: oceanAws.OceanAwsUpdatePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.shouldRoll">shouldRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#should_roll OceanAws#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.autoApplyTags">autoApplyTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#auto_apply_tags OceanAws#auto_apply_tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.conditionedRoll">conditionedRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#conditioned_roll OceanAws#conditioned_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.shouldRoll"></a>

```typescript
public readonly shouldRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#should_roll OceanAws#should_roll}.

---

##### `autoApplyTags`<sup>Optional</sup> <a name="autoApplyTags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.autoApplyTags"></a>

```typescript
public readonly autoApplyTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#auto_apply_tags OceanAws#auto_apply_tags}.

---

##### `conditionedRoll`<sup>Optional</sup> <a name="conditionedRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.conditionedRoll"></a>

```typescript
public readonly conditionedRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#conditioned_roll OceanAws#conditioned_roll}.

---

##### `rollConfig`<sup>Optional</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.rollConfig"></a>

```typescript
public readonly rollConfig: OceanAwsUpdatePolicyRollConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#roll_config OceanAws#roll_config}

---

### OceanAwsUpdatePolicyRollConfig <a name="OceanAwsUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

const oceanAwsUpdatePolicyRollConfig: oceanAws.OceanAwsUpdatePolicyRollConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchSizePercentage">batchSizePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.launchSpecIds">launchSpecIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#launch_spec_ids OceanAws#launch_spec_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.respectPdb">respectPdb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}. |

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}.

---

##### `batchMinHealthyPercentage`<sup>Optional</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchMinHealthyPercentage"></a>

```typescript
public readonly batchMinHealthyPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}.

---

##### `launchSpecIds`<sup>Optional</sup> <a name="launchSpecIds" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.launchSpecIds"></a>

```typescript
public readonly launchSpecIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#launch_spec_ids OceanAws#launch_spec_ids}.

---

##### `respectPdb`<sup>Optional</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.respectPdb"></a>

```typescript
public readonly respectPdb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.134.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAwsAutoscalerAutoscaleDownOutputReference <a name="OceanAwsAutoscalerAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage">resetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetMaxScaleDownPercentage` <a name="resetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```typescript
public resetMaxScaleDownPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">maxScaleDownPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `maxScaleDownPercentageInput`<sup>Optional</sup> <a name="maxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```typescript
public readonly maxScaleDownPercentageInput: number;
```

- *Type:* number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `maxScaleDownPercentage`<sup>Required</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```typescript
public readonly maxScaleDownPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsAutoscalerAutoscaleDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

---


### OceanAwsAutoscalerAutoscaleHeadroomOutputReference <a name="OceanAwsAutoscalerAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetGpuPerUnit">resetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetNumOfUnits">resetNumOfUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetCpuPerUnit"></a>

```typescript
public resetCpuPerUnit(): void
```

##### `resetGpuPerUnit` <a name="resetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetGpuPerUnit"></a>

```typescript
public resetGpuPerUnit(): void
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetMemoryPerUnit"></a>

```typescript
public resetMemoryPerUnit(): void
```

##### `resetNumOfUnits` <a name="resetNumOfUnits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetNumOfUnits"></a>

```typescript
public resetNumOfUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnitInput">gpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnitInput"></a>

```typescript
public readonly cpuPerUnitInput: number;
```

- *Type:* number

---

##### `gpuPerUnitInput`<sup>Optional</sup> <a name="gpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnitInput"></a>

```typescript
public readonly gpuPerUnitInput: number;
```

- *Type:* number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnitInput"></a>

```typescript
public readonly memoryPerUnitInput: number;
```

- *Type:* number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnitsInput"></a>

```typescript
public readonly numOfUnitsInput: number;
```

- *Type:* number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

---

##### `gpuPerUnit`<sup>Required</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsAutoscalerAutoscaleHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

---


### OceanAwsAutoscalerOutputReference <a name="OceanAwsAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsAutoscalerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleDown">putAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom">putAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putResourceLimits">putResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoHeadroomPercentage">resetAutoHeadroomPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleCooldown">resetAutoscaleCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleDown">resetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleHeadroom">resetAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsAutoConfig">resetAutoscaleIsAutoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsEnabled">resetAutoscaleIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom">resetEnableAutomaticAndManualHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetExtendedResourceDefinitions">resetExtendedResourceDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetResourceLimits">resetResourceLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscaleDown` <a name="putAutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleDown"></a>

```typescript
public putAutoscaleDown(value: OceanAwsAutoscalerAutoscaleDown): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

---

##### `putAutoscaleHeadroom` <a name="putAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom"></a>

```typescript
public putAutoscaleHeadroom(value: OceanAwsAutoscalerAutoscaleHeadroom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

---

##### `putResourceLimits` <a name="putResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putResourceLimits"></a>

```typescript
public putResourceLimits(value: OceanAwsAutoscalerResourceLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

---

##### `resetAutoHeadroomPercentage` <a name="resetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoHeadroomPercentage"></a>

```typescript
public resetAutoHeadroomPercentage(): void
```

##### `resetAutoscaleCooldown` <a name="resetAutoscaleCooldown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleCooldown"></a>

```typescript
public resetAutoscaleCooldown(): void
```

##### `resetAutoscaleDown` <a name="resetAutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleDown"></a>

```typescript
public resetAutoscaleDown(): void
```

##### `resetAutoscaleHeadroom` <a name="resetAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleHeadroom"></a>

```typescript
public resetAutoscaleHeadroom(): void
```

##### `resetAutoscaleIsAutoConfig` <a name="resetAutoscaleIsAutoConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsAutoConfig"></a>

```typescript
public resetAutoscaleIsAutoConfig(): void
```

##### `resetAutoscaleIsEnabled` <a name="resetAutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsEnabled"></a>

```typescript
public resetAutoscaleIsEnabled(): void
```

##### `resetEnableAutomaticAndManualHeadroom` <a name="resetEnableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom"></a>

```typescript
public resetEnableAutomaticAndManualHeadroom(): void
```

##### `resetExtendedResourceDefinitions` <a name="resetExtendedResourceDefinitions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetExtendedResourceDefinitions"></a>

```typescript
public resetExtendedResourceDefinitions(): void
```

##### `resetResourceLimits` <a name="resetResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetResourceLimits"></a>

```typescript
public resetResourceLimits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference">OceanAwsAutoscalerAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference">OceanAwsAutoscalerAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference">OceanAwsAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentageInput">autoHeadroomPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldownInput">autoscaleCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDownInput">autoscaleDownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroomInput">autoscaleHeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfigInput">autoscaleIsAutoConfigInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabledInput">autoscaleIsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput">enableAutomaticAndManualHeadroomInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitionsInput">extendedResourceDefinitionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimitsInput">resourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldown">autoscaleCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfig">autoscaleIsAutoConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom">enableAutomaticAndManualHeadroom</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitions">extendedResourceDefinitions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscaleDown`<sup>Required</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDown"></a>

```typescript
public readonly autoscaleDown: OceanAwsAutoscalerAutoscaleDownOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference">OceanAwsAutoscalerAutoscaleDownOutputReference</a>

---

##### `autoscaleHeadroom`<sup>Required</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroom"></a>

```typescript
public readonly autoscaleHeadroom: OceanAwsAutoscalerAutoscaleHeadroomOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference">OceanAwsAutoscalerAutoscaleHeadroomOutputReference</a>

---

##### `resourceLimits`<sup>Required</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimits"></a>

```typescript
public readonly resourceLimits: OceanAwsAutoscalerResourceLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference">OceanAwsAutoscalerResourceLimitsOutputReference</a>

---

##### `autoHeadroomPercentageInput`<sup>Optional</sup> <a name="autoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentageInput"></a>

```typescript
public readonly autoHeadroomPercentageInput: number;
```

- *Type:* number

---

##### `autoscaleCooldownInput`<sup>Optional</sup> <a name="autoscaleCooldownInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldownInput"></a>

```typescript
public readonly autoscaleCooldownInput: number;
```

- *Type:* number

---

##### `autoscaleDownInput`<sup>Optional</sup> <a name="autoscaleDownInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDownInput"></a>

```typescript
public readonly autoscaleDownInput: OceanAwsAutoscalerAutoscaleDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

---

##### `autoscaleHeadroomInput`<sup>Optional</sup> <a name="autoscaleHeadroomInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroomInput"></a>

```typescript
public readonly autoscaleHeadroomInput: OceanAwsAutoscalerAutoscaleHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

---

##### `autoscaleIsAutoConfigInput`<sup>Optional</sup> <a name="autoscaleIsAutoConfigInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfigInput"></a>

```typescript
public readonly autoscaleIsAutoConfigInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoscaleIsEnabledInput`<sup>Optional</sup> <a name="autoscaleIsEnabledInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabledInput"></a>

```typescript
public readonly autoscaleIsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableAutomaticAndManualHeadroomInput`<sup>Optional</sup> <a name="enableAutomaticAndManualHeadroomInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput"></a>

```typescript
public readonly enableAutomaticAndManualHeadroomInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extendedResourceDefinitionsInput`<sup>Optional</sup> <a name="extendedResourceDefinitionsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitionsInput"></a>

```typescript
public readonly extendedResourceDefinitionsInput: string[];
```

- *Type:* string[]

---

##### `resourceLimitsInput`<sup>Optional</sup> <a name="resourceLimitsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimitsInput"></a>

```typescript
public readonly resourceLimitsInput: OceanAwsAutoscalerResourceLimits;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

---

##### `autoHeadroomPercentage`<sup>Required</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentage"></a>

```typescript
public readonly autoHeadroomPercentage: number;
```

- *Type:* number

---

##### `autoscaleCooldown`<sup>Required</sup> <a name="autoscaleCooldown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldown"></a>

```typescript
public readonly autoscaleCooldown: number;
```

- *Type:* number

---

##### `autoscaleIsAutoConfig`<sup>Required</sup> <a name="autoscaleIsAutoConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfig"></a>

```typescript
public readonly autoscaleIsAutoConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoscaleIsEnabled`<sup>Required</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabled"></a>

```typescript
public readonly autoscaleIsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableAutomaticAndManualHeadroom`<sup>Required</sup> <a name="enableAutomaticAndManualHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom"></a>

```typescript
public readonly enableAutomaticAndManualHeadroom: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extendedResourceDefinitions`<sup>Required</sup> <a name="extendedResourceDefinitions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitions"></a>

```typescript
public readonly extendedResourceDefinitions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsAutoscaler;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

---


### OceanAwsAutoscalerResourceLimitsOutputReference <a name="OceanAwsAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">resetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxVcpu">resetMaxVcpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxMemoryGib` <a name="resetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```typescript
public resetMaxMemoryGib(): void
```

##### `resetMaxVcpu` <a name="resetMaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```typescript
public resetMaxVcpu(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">maxMemoryGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">maxVcpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">maxMemoryGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpu">maxVcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxMemoryGibInput`<sup>Optional</sup> <a name="maxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```typescript
public readonly maxMemoryGibInput: number;
```

- *Type:* number

---

##### `maxVcpuInput`<sup>Optional</sup> <a name="maxVcpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```typescript
public readonly maxVcpuInput: number;
```

- *Type:* number

---

##### `maxMemoryGib`<sup>Required</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```typescript
public readonly maxMemoryGib: number;
```

- *Type:* number

---

##### `maxVcpu`<sup>Required</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```typescript
public readonly maxVcpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsAutoscalerResourceLimits;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

---


### OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference <a name="OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput">baseSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput">sizePerResourceUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize">baseSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit">sizePerResourceUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseSizeInput`<sup>Optional</sup> <a name="baseSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput"></a>

```typescript
public readonly baseSizeInput: number;
```

- *Type:* number

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `sizePerResourceUnitInput`<sup>Optional</sup> <a name="sizePerResourceUnitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput"></a>

```typescript
public readonly sizePerResourceUnitInput: number;
```

- *Type:* number

---

##### `baseSize`<sup>Required</sup> <a name="baseSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize"></a>

```typescript
public readonly baseSize: number;
```

- *Type:* number

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `sizePerResourceUnit`<sup>Required</sup> <a name="sizePerResourceUnit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit"></a>

```typescript
public readonly sizePerResourceUnit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---


### OceanAwsBlockDeviceMappingsEbsOutputReference <a name="OceanAwsBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize">putDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize">resetDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamicVolumeSize` <a name="putDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize"></a>

```typescript
public putDynamicVolumeSize(value: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetDynamicVolumeSize` <a name="resetDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize"></a>

```typescript
public resetDynamicVolumeSize(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize">dynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput">dynamicVolumeSizeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicVolumeSize`<sup>Required</sup> <a name="dynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize"></a>

```typescript
public readonly dynamicVolumeSize: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a>

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicVolumeSizeInput`<sup>Optional</sup> <a name="dynamicVolumeSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput"></a>

```typescript
public readonly dynamicVolumeSizeInput: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a>

---


### OceanAwsBlockDeviceMappingsList <a name="OceanAwsBlockDeviceMappingsList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsBlockDeviceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.get"></a>

```typescript
public get(index: number): OceanAwsBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsBlockDeviceMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>[]

---


### OceanAwsBlockDeviceMappingsOutputReference <a name="OceanAwsBlockDeviceMappingsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsBlockDeviceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resetEbs">resetEbs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbs` <a name="putEbs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs"></a>

```typescript
public putEbs(value: OceanAwsBlockDeviceMappingsEbs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a>

---

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetEbs` <a name="resetEbs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resetEbs"></a>

```typescript
public resetEbs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference">OceanAwsBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.ebsInput">ebsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.ebs"></a>

```typescript
public readonly ebs: OceanAwsBlockDeviceMappingsEbsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference">OceanAwsBlockDeviceMappingsEbsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```typescript
public readonly ebsInput: OceanAwsBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a>

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsBlockDeviceMappings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>

---


### OceanAwsClusterOrientationList <a name="OceanAwsClusterOrientationList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsClusterOrientationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.get"></a>

```typescript
public get(index: number): OceanAwsClusterOrientationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsClusterOrientation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>[]

---


### OceanAwsClusterOrientationOutputReference <a name="OceanAwsClusterOrientationOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsClusterOrientationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resetAvailabilityVsCost">resetAvailabilityVsCost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityVsCost` <a name="resetAvailabilityVsCost" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resetAvailabilityVsCost"></a>

```typescript
public resetAvailabilityVsCost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCostInput">availabilityVsCostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCost">availabilityVsCost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityVsCostInput`<sup>Optional</sup> <a name="availabilityVsCostInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCostInput"></a>

```typescript
public readonly availabilityVsCostInput: string;
```

- *Type:* string

---

##### `availabilityVsCost`<sup>Required</sup> <a name="availabilityVsCost" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCost"></a>

```typescript
public readonly availabilityVsCost: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsClusterOrientation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>

---


### OceanAwsFiltersOutputReference <a name="OceanAwsFiltersOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetArchitectures">resetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetCategories">resetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetDiskTypes">resetDiskTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeFamilies">resetExcludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeMetal">resetExcludeMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetHypervisor">resetHypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIncludeFamilies">resetIncludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIsEnaSupported">resetIsEnaSupported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxGpu">resetMaxGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxMemoryGib">resetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxNetworkPerformance">resetMaxNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxVcpu">resetMaxVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinEnis">resetMinEnis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinGpu">resetMinGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinMemoryGib">resetMinMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinNetworkPerformance">resetMinNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinVcpu">resetMinVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetRootDeviceTypes">resetRootDeviceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetVirtualizationTypes">resetVirtualizationTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchitectures` <a name="resetArchitectures" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetArchitectures"></a>

```typescript
public resetArchitectures(): void
```

##### `resetCategories` <a name="resetCategories" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetCategories"></a>

```typescript
public resetCategories(): void
```

##### `resetDiskTypes` <a name="resetDiskTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetDiskTypes"></a>

```typescript
public resetDiskTypes(): void
```

##### `resetExcludeFamilies` <a name="resetExcludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeFamilies"></a>

```typescript
public resetExcludeFamilies(): void
```

##### `resetExcludeMetal` <a name="resetExcludeMetal" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeMetal"></a>

```typescript
public resetExcludeMetal(): void
```

##### `resetHypervisor` <a name="resetHypervisor" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetHypervisor"></a>

```typescript
public resetHypervisor(): void
```

##### `resetIncludeFamilies` <a name="resetIncludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIncludeFamilies"></a>

```typescript
public resetIncludeFamilies(): void
```

##### `resetIsEnaSupported` <a name="resetIsEnaSupported" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIsEnaSupported"></a>

```typescript
public resetIsEnaSupported(): void
```

##### `resetMaxGpu` <a name="resetMaxGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxGpu"></a>

```typescript
public resetMaxGpu(): void
```

##### `resetMaxMemoryGib` <a name="resetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxMemoryGib"></a>

```typescript
public resetMaxMemoryGib(): void
```

##### `resetMaxNetworkPerformance` <a name="resetMaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxNetworkPerformance"></a>

```typescript
public resetMaxNetworkPerformance(): void
```

##### `resetMaxVcpu` <a name="resetMaxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxVcpu"></a>

```typescript
public resetMaxVcpu(): void
```

##### `resetMinEnis` <a name="resetMinEnis" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinEnis"></a>

```typescript
public resetMinEnis(): void
```

##### `resetMinGpu` <a name="resetMinGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinGpu"></a>

```typescript
public resetMinGpu(): void
```

##### `resetMinMemoryGib` <a name="resetMinMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinMemoryGib"></a>

```typescript
public resetMinMemoryGib(): void
```

##### `resetMinNetworkPerformance` <a name="resetMinNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinNetworkPerformance"></a>

```typescript
public resetMinNetworkPerformance(): void
```

##### `resetMinVcpu` <a name="resetMinVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinVcpu"></a>

```typescript
public resetMinVcpu(): void
```

##### `resetRootDeviceTypes` <a name="resetRootDeviceTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetRootDeviceTypes"></a>

```typescript
public resetRootDeviceTypes(): void
```

##### `resetVirtualizationTypes` <a name="resetVirtualizationTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetVirtualizationTypes"></a>

```typescript
public resetVirtualizationTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architecturesInput">architecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categoriesInput">categoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypesInput">diskTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamiliesInput">excludeFamiliesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetalInput">excludeMetalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisorInput">hypervisorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamiliesInput">includeFamiliesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupportedInput">isEnaSupportedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpuInput">maxGpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGibInput">maxMemoryGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformanceInput">maxNetworkPerformanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpuInput">maxVcpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnisInput">minEnisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpuInput">minGpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGibInput">minMemoryGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformanceInput">minNetworkPerformanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpuInput">minVcpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypesInput">rootDeviceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypesInput">virtualizationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architectures">architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categories">categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypes">diskTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamilies">excludeFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetal">excludeMetal</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisor">hypervisor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamilies">includeFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupported">isEnaSupported</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpu">maxGpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGib">maxMemoryGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformance">maxNetworkPerformance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpu">maxVcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnis">minEnis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpu">minGpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGib">minMemoryGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformance">minNetworkPerformance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpu">minVcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypes">rootDeviceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypes">virtualizationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecturesInput`<sup>Optional</sup> <a name="architecturesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architecturesInput"></a>

```typescript
public readonly architecturesInput: string[];
```

- *Type:* string[]

---

##### `categoriesInput`<sup>Optional</sup> <a name="categoriesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categoriesInput"></a>

```typescript
public readonly categoriesInput: string[];
```

- *Type:* string[]

---

##### `diskTypesInput`<sup>Optional</sup> <a name="diskTypesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypesInput"></a>

```typescript
public readonly diskTypesInput: string[];
```

- *Type:* string[]

---

##### `excludeFamiliesInput`<sup>Optional</sup> <a name="excludeFamiliesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamiliesInput"></a>

```typescript
public readonly excludeFamiliesInput: string[];
```

- *Type:* string[]

---

##### `excludeMetalInput`<sup>Optional</sup> <a name="excludeMetalInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetalInput"></a>

```typescript
public readonly excludeMetalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hypervisorInput`<sup>Optional</sup> <a name="hypervisorInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisorInput"></a>

```typescript
public readonly hypervisorInput: string[];
```

- *Type:* string[]

---

##### `includeFamiliesInput`<sup>Optional</sup> <a name="includeFamiliesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamiliesInput"></a>

```typescript
public readonly includeFamiliesInput: string[];
```

- *Type:* string[]

---

##### `isEnaSupportedInput`<sup>Optional</sup> <a name="isEnaSupportedInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupportedInput"></a>

```typescript
public readonly isEnaSupportedInput: string;
```

- *Type:* string

---

##### `maxGpuInput`<sup>Optional</sup> <a name="maxGpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpuInput"></a>

```typescript
public readonly maxGpuInput: number;
```

- *Type:* number

---

##### `maxMemoryGibInput`<sup>Optional</sup> <a name="maxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGibInput"></a>

```typescript
public readonly maxMemoryGibInput: number;
```

- *Type:* number

---

##### `maxNetworkPerformanceInput`<sup>Optional</sup> <a name="maxNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformanceInput"></a>

```typescript
public readonly maxNetworkPerformanceInput: number;
```

- *Type:* number

---

##### `maxVcpuInput`<sup>Optional</sup> <a name="maxVcpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpuInput"></a>

```typescript
public readonly maxVcpuInput: number;
```

- *Type:* number

---

##### `minEnisInput`<sup>Optional</sup> <a name="minEnisInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnisInput"></a>

```typescript
public readonly minEnisInput: number;
```

- *Type:* number

---

##### `minGpuInput`<sup>Optional</sup> <a name="minGpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpuInput"></a>

```typescript
public readonly minGpuInput: number;
```

- *Type:* number

---

##### `minMemoryGibInput`<sup>Optional</sup> <a name="minMemoryGibInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGibInput"></a>

```typescript
public readonly minMemoryGibInput: number;
```

- *Type:* number

---

##### `minNetworkPerformanceInput`<sup>Optional</sup> <a name="minNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformanceInput"></a>

```typescript
public readonly minNetworkPerformanceInput: number;
```

- *Type:* number

---

##### `minVcpuInput`<sup>Optional</sup> <a name="minVcpuInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpuInput"></a>

```typescript
public readonly minVcpuInput: number;
```

- *Type:* number

---

##### `rootDeviceTypesInput`<sup>Optional</sup> <a name="rootDeviceTypesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypesInput"></a>

```typescript
public readonly rootDeviceTypesInput: string[];
```

- *Type:* string[]

---

##### `virtualizationTypesInput`<sup>Optional</sup> <a name="virtualizationTypesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypesInput"></a>

```typescript
public readonly virtualizationTypesInput: string[];
```

- *Type:* string[]

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categories"></a>

```typescript
public readonly categories: string[];
```

- *Type:* string[]

---

##### `diskTypes`<sup>Required</sup> <a name="diskTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypes"></a>

```typescript
public readonly diskTypes: string[];
```

- *Type:* string[]

---

##### `excludeFamilies`<sup>Required</sup> <a name="excludeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamilies"></a>

```typescript
public readonly excludeFamilies: string[];
```

- *Type:* string[]

---

##### `excludeMetal`<sup>Required</sup> <a name="excludeMetal" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetal"></a>

```typescript
public readonly excludeMetal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisor"></a>

```typescript
public readonly hypervisor: string[];
```

- *Type:* string[]

---

##### `includeFamilies`<sup>Required</sup> <a name="includeFamilies" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamilies"></a>

```typescript
public readonly includeFamilies: string[];
```

- *Type:* string[]

---

##### `isEnaSupported`<sup>Required</sup> <a name="isEnaSupported" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupported"></a>

```typescript
public readonly isEnaSupported: string;
```

- *Type:* string

---

##### `maxGpu`<sup>Required</sup> <a name="maxGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpu"></a>

```typescript
public readonly maxGpu: number;
```

- *Type:* number

---

##### `maxMemoryGib`<sup>Required</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGib"></a>

```typescript
public readonly maxMemoryGib: number;
```

- *Type:* number

---

##### `maxNetworkPerformance`<sup>Required</sup> <a name="maxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformance"></a>

```typescript
public readonly maxNetworkPerformance: number;
```

- *Type:* number

---

##### `maxVcpu`<sup>Required</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpu"></a>

```typescript
public readonly maxVcpu: number;
```

- *Type:* number

---

##### `minEnis`<sup>Required</sup> <a name="minEnis" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnis"></a>

```typescript
public readonly minEnis: number;
```

- *Type:* number

---

##### `minGpu`<sup>Required</sup> <a name="minGpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpu"></a>

```typescript
public readonly minGpu: number;
```

- *Type:* number

---

##### `minMemoryGib`<sup>Required</sup> <a name="minMemoryGib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGib"></a>

```typescript
public readonly minMemoryGib: number;
```

- *Type:* number

---

##### `minNetworkPerformance`<sup>Required</sup> <a name="minNetworkPerformance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformance"></a>

```typescript
public readonly minNetworkPerformance: number;
```

- *Type:* number

---

##### `minVcpu`<sup>Required</sup> <a name="minVcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpu"></a>

```typescript
public readonly minVcpu: number;
```

- *Type:* number

---

##### `rootDeviceTypes`<sup>Required</sup> <a name="rootDeviceTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypes"></a>

```typescript
public readonly rootDeviceTypes: string[];
```

- *Type:* string[]

---

##### `virtualizationTypes`<sup>Required</sup> <a name="virtualizationTypes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypes"></a>

```typescript
public readonly virtualizationTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsFilters;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

---


### OceanAwsInstanceMetadataOptionsOutputReference <a name="OceanAwsInstanceMetadataOptionsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsInstanceMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```typescript
public resetHttpPutResponseHopLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```typescript
public readonly httpPutResponseHopLimitInput: number;
```

- *Type:* number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```typescript
public readonly httpTokensInput: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsInstanceMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

---


### OceanAwsLoadBalancersList <a name="OceanAwsLoadBalancersList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsLoadBalancersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.get"></a>

```typescript
public get(index: number): OceanAwsLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLoadBalancers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>[]

---


### OceanAwsLoadBalancersOutputReference <a name="OceanAwsLoadBalancersOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsLoadBalancersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLoadBalancers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>

---


### OceanAwsLoggingExportOutputReference <a name="OceanAwsLoggingExportOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsLoggingExportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.putS3"></a>

```typescript
public putS3(value: IResolvable | OceanAwsLoggingExportS3[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.putS3.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>[]

---

##### `resetS3` <a name="resetS3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List">OceanAwsLoggingExportS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3Input">s3Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3"></a>

```typescript
public readonly s3: OceanAwsLoggingExportS3List;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List">OceanAwsLoggingExportS3List</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | OceanAwsLoggingExportS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsLoggingExport;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

---


### OceanAwsLoggingExportS3List <a name="OceanAwsLoggingExportS3List" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsLoggingExportS3List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.get"></a>

```typescript
public get(index: number): OceanAwsLoggingExportS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLoggingExportS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>[]

---


### OceanAwsLoggingExportS3OutputReference <a name="OceanAwsLoggingExportS3OutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsLoggingExportS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLoggingExportS3;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>

---


### OceanAwsLoggingOutputReference <a name="OceanAwsLoggingOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.putExport">putExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resetExport">resetExport</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExport` <a name="putExport" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.putExport"></a>

```typescript
public putExport(value: OceanAwsLoggingExport): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.putExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

---

##### `resetExport` <a name="resetExport" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resetExport"></a>

```typescript
public resetExport(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.export">export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference">OceanAwsLoggingExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.exportInput">exportInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.export"></a>

```typescript
public readonly export: OceanAwsLoggingExportOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference">OceanAwsLoggingExportOutputReference</a>

---

##### `exportInput`<sup>Optional</sup> <a name="exportInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.exportInput"></a>

```typescript
public readonly exportInput: OceanAwsLoggingExport;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsLogging;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

---


### OceanAwsResourceTagSpecificationList <a name="OceanAwsResourceTagSpecificationList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsResourceTagSpecificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.get"></a>

```typescript
public get(index: number): OceanAwsResourceTagSpecificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification">OceanAwsResourceTagSpecification</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsResourceTagSpecification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification">OceanAwsResourceTagSpecification</a>[]

---


### OceanAwsResourceTagSpecificationOutputReference <a name="OceanAwsResourceTagSpecificationOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsResourceTagSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.resetShouldTagVolumes">resetShouldTagVolumes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetShouldTagVolumes` <a name="resetShouldTagVolumes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.resetShouldTagVolumes"></a>

```typescript
public resetShouldTagVolumes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.shouldTagVolumesInput">shouldTagVolumesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.shouldTagVolumes">shouldTagVolumes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification">OceanAwsResourceTagSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shouldTagVolumesInput`<sup>Optional</sup> <a name="shouldTagVolumesInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.shouldTagVolumesInput"></a>

```typescript
public readonly shouldTagVolumesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldTagVolumes`<sup>Required</sup> <a name="shouldTagVolumes" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.shouldTagVolumes"></a>

```typescript
public readonly shouldTagVolumes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsResourceTagSpecification;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsResourceTagSpecification">OceanAwsResourceTagSpecification</a>

---


### OceanAwsScheduledTaskList <a name="OceanAwsScheduledTaskList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsScheduledTaskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.get"></a>

```typescript
public get(index: number): OceanAwsScheduledTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsScheduledTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>[]

---


### OceanAwsScheduledTaskOutputReference <a name="OceanAwsScheduledTaskOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsScheduledTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putShutdownHours">putShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putTasks">putTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetShutdownHours">resetShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetTasks">resetTasks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShutdownHours` <a name="putShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putShutdownHours"></a>

```typescript
public putShutdownHours(value: OceanAwsScheduledTaskShutdownHours): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

---

##### `putTasks` <a name="putTasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putTasks"></a>

```typescript
public putTasks(value: IResolvable | OceanAwsScheduledTaskTasks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putTasks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>[]

---

##### `resetShutdownHours` <a name="resetShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetShutdownHours"></a>

```typescript
public resetShutdownHours(): void
```

##### `resetTasks` <a name="resetTasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetTasks"></a>

```typescript
public resetTasks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHours">shutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference">OceanAwsScheduledTaskShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasks">tasks</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList">OceanAwsScheduledTaskTasksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHoursInput">shutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasksInput">tasksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shutdownHours`<sup>Required</sup> <a name="shutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHours"></a>

```typescript
public readonly shutdownHours: OceanAwsScheduledTaskShutdownHoursOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference">OceanAwsScheduledTaskShutdownHoursOutputReference</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasks"></a>

```typescript
public readonly tasks: OceanAwsScheduledTaskTasksList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList">OceanAwsScheduledTaskTasksList</a>

---

##### `shutdownHoursInput`<sup>Optional</sup> <a name="shutdownHoursInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHoursInput"></a>

```typescript
public readonly shutdownHoursInput: OceanAwsScheduledTaskShutdownHours;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

---

##### `tasksInput`<sup>Optional</sup> <a name="tasksInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasksInput"></a>

```typescript
public readonly tasksInput: IResolvable | OceanAwsScheduledTaskTasks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsScheduledTask;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>

---


### OceanAwsScheduledTaskShutdownHoursOutputReference <a name="OceanAwsScheduledTaskShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput">timeWindowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindows">timeWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeWindowsInput`<sup>Optional</sup> <a name="timeWindowsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput"></a>

```typescript
public readonly timeWindowsInput: string[];
```

- *Type:* string[]

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeWindows`<sup>Required</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindows"></a>

```typescript
public readonly timeWindows: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsScheduledTaskShutdownHours;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

---


### OceanAwsScheduledTaskTasksList <a name="OceanAwsScheduledTaskTasksList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsScheduledTaskTasksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.get"></a>

```typescript
public get(index: number): OceanAwsScheduledTaskTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsScheduledTaskTasks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>[]

---


### OceanAwsScheduledTaskTasksOutputReference <a name="OceanAwsScheduledTaskTasksOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsScheduledTaskTasksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskType">taskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskTypeInput"></a>

```typescript
public readonly taskTypeInput: string;
```

- *Type:* string

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsScheduledTaskTasks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>

---


### OceanAwsTagsList <a name="OceanAwsTagsList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.get"></a>

```typescript
public get(index: number): OceanAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>[]

---


### OceanAwsTagsOutputReference <a name="OceanAwsTagsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>

---


### OceanAwsUpdatePolicyOutputReference <a name="OceanAwsUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig">putRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetAutoApplyTags">resetAutoApplyTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetConditionedRoll">resetConditionedRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetRollConfig">resetRollConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRollConfig` <a name="putRollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig"></a>

```typescript
public putRollConfig(value: OceanAwsUpdatePolicyRollConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

---

##### `resetAutoApplyTags` <a name="resetAutoApplyTags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetAutoApplyTags"></a>

```typescript
public resetAutoApplyTags(): void
```

##### `resetConditionedRoll` <a name="resetConditionedRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetConditionedRoll"></a>

```typescript
public resetConditionedRoll(): void
```

##### `resetRollConfig` <a name="resetRollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetRollConfig"></a>

```typescript
public resetRollConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference">OceanAwsUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTagsInput">autoApplyTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRollInput">conditionedRollInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfigInput">rollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRollInput">shouldRollInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTags">autoApplyTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRoll">conditionedRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRoll">shouldRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rollConfig`<sup>Required</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfig"></a>

```typescript
public readonly rollConfig: OceanAwsUpdatePolicyRollConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference">OceanAwsUpdatePolicyRollConfigOutputReference</a>

---

##### `autoApplyTagsInput`<sup>Optional</sup> <a name="autoApplyTagsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTagsInput"></a>

```typescript
public readonly autoApplyTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `conditionedRollInput`<sup>Optional</sup> <a name="conditionedRollInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRollInput"></a>

```typescript
public readonly conditionedRollInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rollConfigInput`<sup>Optional</sup> <a name="rollConfigInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfigInput"></a>

```typescript
public readonly rollConfigInput: OceanAwsUpdatePolicyRollConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

---

##### `shouldRollInput`<sup>Optional</sup> <a name="shouldRollInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRollInput"></a>

```typescript
public readonly shouldRollInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoApplyTags`<sup>Required</sup> <a name="autoApplyTags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTags"></a>

```typescript
public readonly autoApplyTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `conditionedRoll`<sup>Required</sup> <a name="conditionedRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRoll"></a>

```typescript
public readonly conditionedRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRoll"></a>

```typescript
public readonly shouldRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

---


### OceanAwsUpdatePolicyRollConfigOutputReference <a name="OceanAwsUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer"></a>

```typescript
import { oceanAws } from '@cdktf/provider-spotinst'

new oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage">resetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetLaunchSpecIds">resetLaunchSpecIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetRespectPdb">resetRespectPdb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchMinHealthyPercentage` <a name="resetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage"></a>

```typescript
public resetBatchMinHealthyPercentage(): void
```

##### `resetLaunchSpecIds` <a name="resetLaunchSpecIds" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetLaunchSpecIds"></a>

```typescript
public resetLaunchSpecIds(): void
```

##### `resetRespectPdb` <a name="resetRespectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetRespectPdb"></a>

```typescript
public resetRespectPdb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput">batchMinHealthyPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIdsInput">launchSpecIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdbInput">respectPdbInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage">batchMinHealthyPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIds">launchSpecIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdb">respectPdb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchMinHealthyPercentageInput`<sup>Optional</sup> <a name="batchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput"></a>

```typescript
public readonly batchMinHealthyPercentageInput: number;
```

- *Type:* number

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```typescript
public readonly batchSizePercentageInput: number;
```

- *Type:* number

---

##### `launchSpecIdsInput`<sup>Optional</sup> <a name="launchSpecIdsInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIdsInput"></a>

```typescript
public readonly launchSpecIdsInput: string[];
```

- *Type:* string[]

---

##### `respectPdbInput`<sup>Optional</sup> <a name="respectPdbInput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdbInput"></a>

```typescript
public readonly respectPdbInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `batchMinHealthyPercentage`<sup>Required</sup> <a name="batchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage"></a>

```typescript
public readonly batchMinHealthyPercentage: number;
```

- *Type:* number

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: number;
```

- *Type:* number

---

##### `launchSpecIds`<sup>Required</sup> <a name="launchSpecIds" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIds"></a>

```typescript
public readonly launchSpecIds: string[];
```

- *Type:* string[]

---

##### `respectPdb`<sup>Required</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdb"></a>

```typescript
public readonly respectPdb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsUpdatePolicyRollConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

---



