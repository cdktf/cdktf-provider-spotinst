# `oceanAwsLaunchSpec` Submodule <a name="`oceanAwsLaunchSpec` Submodule" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAwsLaunchSpec <a name="OceanAwsLaunchSpec" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec spotinst_ocean_aws_launch_spec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpec(scope: Construct, id: string, config: OceanAwsLaunchSpecConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig">OceanAwsLaunchSpecConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig">OceanAwsLaunchSpecConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleDown">putAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadrooms">putAutoscaleHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadroomsAutomatic">putAutoscaleHeadroomsAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putBlockDeviceMappings">putBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putCreateOptions">putCreateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putDeleteOptions">putDeleteOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putElasticIpPool">putElasticIpPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putEphemeralStorage">putEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putImages">putImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceMetadataOptions">putInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceTypesFilters">putInstanceTypesFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putResourceLimits">putResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingShutdownHours">putSchedulingShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingTask">putSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putUpdatePolicy">putUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAssociatePublicIpAddress">resetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleDown">resetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleHeadrooms">resetAutoscaleHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleHeadroomsAutomatic">resetAutoscaleHeadroomsAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetBlockDeviceMappings">resetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetCreateOptions">resetCreateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetDeleteOptions">resetDeleteOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetElasticIpPool">resetElasticIpPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetEphemeralStorage">resetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetIamInstanceProfile">resetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetImages">resetImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceMetadataOptions">resetInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceTypes">resetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceTypesFilters">resetInstanceTypesFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetPreferredOdTypes">resetPreferredOdTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetPreferredSpotTypes">resetPreferredSpotTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetReservedEnis">resetReservedEnis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetResourceLimits">resetResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetRestrictScaleDown">resetRestrictScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetRootVolumeSize">resetRootVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSchedulingShutdownHours">resetSchedulingShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSchedulingTask">resetSchedulingTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetStrategy">resetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetTaints">resetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetUpdatePolicy">resetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaleDown` <a name="putAutoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleDown"></a>

```typescript
public putAutoscaleDown(value: IResolvable | OceanAwsLaunchSpecAutoscaleDown[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleDown.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown">OceanAwsLaunchSpecAutoscaleDown</a>[]

---

##### `putAutoscaleHeadrooms` <a name="putAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadrooms"></a>

```typescript
public putAutoscaleHeadrooms(value: IResolvable | OceanAwsLaunchSpecAutoscaleHeadrooms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadrooms.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms">OceanAwsLaunchSpecAutoscaleHeadrooms</a>[]

---

##### `putAutoscaleHeadroomsAutomatic` <a name="putAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadroomsAutomatic"></a>

```typescript
public putAutoscaleHeadroomsAutomatic(value: IResolvable | OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putAutoscaleHeadroomsAutomatic.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic">OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic</a>[]

---

##### `putBlockDeviceMappings` <a name="putBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putBlockDeviceMappings"></a>

```typescript
public putBlockDeviceMappings(value: IResolvable | OceanAwsLaunchSpecBlockDeviceMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putBlockDeviceMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings">OceanAwsLaunchSpecBlockDeviceMappings</a>[]

---

##### `putCreateOptions` <a name="putCreateOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putCreateOptions"></a>

```typescript
public putCreateOptions(value: OceanAwsLaunchSpecCreateOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putCreateOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a>

---

##### `putDeleteOptions` <a name="putDeleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putDeleteOptions"></a>

```typescript
public putDeleteOptions(value: OceanAwsLaunchSpecDeleteOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putDeleteOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a>

---

##### `putElasticIpPool` <a name="putElasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putElasticIpPool"></a>

```typescript
public putElasticIpPool(value: IResolvable | OceanAwsLaunchSpecElasticIpPool[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putElasticIpPool.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool">OceanAwsLaunchSpecElasticIpPool</a>[]

---

##### `putEphemeralStorage` <a name="putEphemeralStorage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putEphemeralStorage"></a>

```typescript
public putEphemeralStorage(value: IResolvable | OceanAwsLaunchSpecEphemeralStorage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putEphemeralStorage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage">OceanAwsLaunchSpecEphemeralStorage</a>[]

---

##### `putImages` <a name="putImages" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putImages"></a>

```typescript
public putImages(value: IResolvable | OceanAwsLaunchSpecImages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putImages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages">OceanAwsLaunchSpecImages</a>[]

---

##### `putInstanceMetadataOptions` <a name="putInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceMetadataOptions"></a>

```typescript
public putInstanceMetadataOptions(value: OceanAwsLaunchSpecInstanceMetadataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a>

---

##### `putInstanceTypesFilters` <a name="putInstanceTypesFilters" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceTypesFilters"></a>

```typescript
public putInstanceTypesFilters(value: OceanAwsLaunchSpecInstanceTypesFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putInstanceTypesFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a>

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putLabels"></a>

```typescript
public putLabels(value: IResolvable | OceanAwsLaunchSpecLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels">OceanAwsLaunchSpecLabels</a>[]

---

##### `putResourceLimits` <a name="putResourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putResourceLimits"></a>

```typescript
public putResourceLimits(value: IResolvable | OceanAwsLaunchSpecResourceLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putResourceLimits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits">OceanAwsLaunchSpecResourceLimits</a>[]

---

##### `putSchedulingShutdownHours` <a name="putSchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingShutdownHours"></a>

```typescript
public putSchedulingShutdownHours(value: OceanAwsLaunchSpecSchedulingShutdownHours): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a>

---

##### `putSchedulingTask` <a name="putSchedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingTask"></a>

```typescript
public putSchedulingTask(value: IResolvable | OceanAwsLaunchSpecSchedulingTask[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putSchedulingTask.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask">OceanAwsLaunchSpecSchedulingTask</a>[]

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putStrategy"></a>

```typescript
public putStrategy(value: IResolvable | OceanAwsLaunchSpecStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putStrategy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy">OceanAwsLaunchSpecStrategy</a>[]

---

##### `putTags` <a name="putTags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTags"></a>

```typescript
public putTags(value: IResolvable | OceanAwsLaunchSpecTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags">OceanAwsLaunchSpecTags</a>[]

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTaints"></a>

```typescript
public putTaints(value: IResolvable | OceanAwsLaunchSpecTaints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints">OceanAwsLaunchSpecTaints</a>[]

---

##### `putUpdatePolicy` <a name="putUpdatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putUpdatePolicy"></a>

```typescript
public putUpdatePolicy(value: OceanAwsLaunchSpecUpdatePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a>

---

##### `resetAssociatePublicIpAddress` <a name="resetAssociatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAssociatePublicIpAddress"></a>

```typescript
public resetAssociatePublicIpAddress(): void
```

##### `resetAutoscaleDown` <a name="resetAutoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleDown"></a>

```typescript
public resetAutoscaleDown(): void
```

##### `resetAutoscaleHeadrooms` <a name="resetAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleHeadrooms"></a>

```typescript
public resetAutoscaleHeadrooms(): void
```

##### `resetAutoscaleHeadroomsAutomatic` <a name="resetAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetAutoscaleHeadroomsAutomatic"></a>

```typescript
public resetAutoscaleHeadroomsAutomatic(): void
```

##### `resetBlockDeviceMappings` <a name="resetBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetBlockDeviceMappings"></a>

```typescript
public resetBlockDeviceMappings(): void
```

##### `resetCreateOptions` <a name="resetCreateOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetCreateOptions"></a>

```typescript
public resetCreateOptions(): void
```

##### `resetDeleteOptions` <a name="resetDeleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetDeleteOptions"></a>

```typescript
public resetDeleteOptions(): void
```

##### `resetElasticIpPool` <a name="resetElasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetElasticIpPool"></a>

```typescript
public resetElasticIpPool(): void
```

##### `resetEphemeralStorage` <a name="resetEphemeralStorage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetEphemeralStorage"></a>

```typescript
public resetEphemeralStorage(): void
```

##### `resetIamInstanceProfile` <a name="resetIamInstanceProfile" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetIamInstanceProfile"></a>

```typescript
public resetIamInstanceProfile(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageId` <a name="resetImageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetImages` <a name="resetImages" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetImages"></a>

```typescript
public resetImages(): void
```

##### `resetInstanceMetadataOptions` <a name="resetInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceMetadataOptions"></a>

```typescript
public resetInstanceMetadataOptions(): void
```

##### `resetInstanceTypes` <a name="resetInstanceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceTypes"></a>

```typescript
public resetInstanceTypes(): void
```

##### `resetInstanceTypesFilters` <a name="resetInstanceTypesFilters" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetInstanceTypesFilters"></a>

```typescript
public resetInstanceTypesFilters(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPreferredOdTypes` <a name="resetPreferredOdTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetPreferredOdTypes"></a>

```typescript
public resetPreferredOdTypes(): void
```

##### `resetPreferredSpotTypes` <a name="resetPreferredSpotTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetPreferredSpotTypes"></a>

```typescript
public resetPreferredSpotTypes(): void
```

##### `resetReservedEnis` <a name="resetReservedEnis" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetReservedEnis"></a>

```typescript
public resetReservedEnis(): void
```

##### `resetResourceLimits` <a name="resetResourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetResourceLimits"></a>

```typescript
public resetResourceLimits(): void
```

##### `resetRestrictScaleDown` <a name="resetRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetRestrictScaleDown"></a>

```typescript
public resetRestrictScaleDown(): void
```

##### `resetRootVolumeSize` <a name="resetRootVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetRootVolumeSize"></a>

```typescript
public resetRootVolumeSize(): void
```

##### `resetSchedulingShutdownHours` <a name="resetSchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSchedulingShutdownHours"></a>

```typescript
public resetSchedulingShutdownHours(): void
```

##### `resetSchedulingTask` <a name="resetSchedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSchedulingTask"></a>

```typescript
public resetSchedulingTask(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetStrategy"></a>

```typescript
public resetStrategy(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetTaints"></a>

```typescript
public resetTaints(): void
```

##### `resetUpdatePolicy` <a name="resetUpdatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetUpdatePolicy"></a>

```typescript
public resetUpdatePolicy(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.resetUserData"></a>

```typescript
public resetUserData(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceanAwsLaunchSpec resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isConstruct"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

oceanAwsLaunchSpec.OceanAwsLaunchSpec.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformElement"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformResource"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.generateConfigForImport"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

oceanAwsLaunchSpec.OceanAwsLaunchSpec.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OceanAwsLaunchSpec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceanAwsLaunchSpec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceanAwsLaunchSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceanAwsLaunchSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList">OceanAwsLaunchSpecAutoscaleDownList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadrooms">autoscaleHeadrooms</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList">OceanAwsLaunchSpecAutoscaleHeadroomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsAutomatic">autoscaleHeadroomsAutomatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList">OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList">OceanAwsLaunchSpecBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.createOptions">createOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference">OceanAwsLaunchSpecCreateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.deleteOptions">deleteOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference">OceanAwsLaunchSpecDeleteOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.elasticIpPool">elasticIpPool</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList">OceanAwsLaunchSpecElasticIpPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.ephemeralStorage">ephemeralStorage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList">OceanAwsLaunchSpecEphemeralStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.images">images</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList">OceanAwsLaunchSpecImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceMetadataOptions">instanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference">OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesFilters">instanceTypesFilters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference">OceanAwsLaunchSpecInstanceTypesFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList">OceanAwsLaunchSpecLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList">OceanAwsLaunchSpecResourceLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingShutdownHours">schedulingShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference">OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingTask">schedulingTask</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList">OceanAwsLaunchSpecSchedulingTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList">OceanAwsLaunchSpecStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList">OceanAwsLaunchSpecTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList">OceanAwsLaunchSpecTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference">OceanAwsLaunchSpecUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.associatePublicIpAddressInput">associatePublicIpAddressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleDownInput">autoscaleDownInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown">OceanAwsLaunchSpecAutoscaleDown</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsAutomaticInput">autoscaleHeadroomsAutomaticInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic">OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsInput">autoscaleHeadroomsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms">OceanAwsLaunchSpecAutoscaleHeadrooms</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.blockDeviceMappingsInput">blockDeviceMappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings">OceanAwsLaunchSpecBlockDeviceMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.createOptionsInput">createOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.deleteOptionsInput">deleteOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.elasticIpPoolInput">elasticIpPoolInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool">OceanAwsLaunchSpecElasticIpPool</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.ephemeralStorageInput">ephemeralStorageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage">OceanAwsLaunchSpecEphemeralStorage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imagesInput">imagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages">OceanAwsLaunchSpecImages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceMetadataOptionsInput">instanceMetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesFiltersInput">instanceTypesFiltersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesInput">instanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels">OceanAwsLaunchSpecLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.oceanIdInput">oceanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredOdTypesInput">preferredOdTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredSpotTypesInput">preferredSpotTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.reservedEnisInput">reservedEnisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.resourceLimitsInput">resourceLimitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits">OceanAwsLaunchSpecResourceLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.restrictScaleDownInput">restrictScaleDownInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.rootVolumeSizeInput">rootVolumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingShutdownHoursInput">schedulingShutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingTaskInput">schedulingTaskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask">OceanAwsLaunchSpecSchedulingTask</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.strategyInput">strategyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy">OceanAwsLaunchSpecStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags">OceanAwsLaunchSpecTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints">OceanAwsLaunchSpecTaints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.updatePolicyInput">updatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.oceanId">oceanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredOdTypes">preferredOdTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredSpotTypes">preferredSpotTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.reservedEnis">reservedEnis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.restrictScaleDown">restrictScaleDown</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.rootVolumeSize">rootVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.userData">userData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaleDown`<sup>Required</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleDown"></a>

```typescript
public readonly autoscaleDown: OceanAwsLaunchSpecAutoscaleDownList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList">OceanAwsLaunchSpecAutoscaleDownList</a>

---

##### `autoscaleHeadrooms`<sup>Required</sup> <a name="autoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadrooms"></a>

```typescript
public readonly autoscaleHeadrooms: OceanAwsLaunchSpecAutoscaleHeadroomsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList">OceanAwsLaunchSpecAutoscaleHeadroomsList</a>

---

##### `autoscaleHeadroomsAutomatic`<sup>Required</sup> <a name="autoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsAutomatic"></a>

```typescript
public readonly autoscaleHeadroomsAutomatic: OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList">OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList</a>

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: OceanAwsLaunchSpecBlockDeviceMappingsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList">OceanAwsLaunchSpecBlockDeviceMappingsList</a>

---

##### `createOptions`<sup>Required</sup> <a name="createOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.createOptions"></a>

```typescript
public readonly createOptions: OceanAwsLaunchSpecCreateOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference">OceanAwsLaunchSpecCreateOptionsOutputReference</a>

---

##### `deleteOptions`<sup>Required</sup> <a name="deleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.deleteOptions"></a>

```typescript
public readonly deleteOptions: OceanAwsLaunchSpecDeleteOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference">OceanAwsLaunchSpecDeleteOptionsOutputReference</a>

---

##### `elasticIpPool`<sup>Required</sup> <a name="elasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.elasticIpPool"></a>

```typescript
public readonly elasticIpPool: OceanAwsLaunchSpecElasticIpPoolList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList">OceanAwsLaunchSpecElasticIpPoolList</a>

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: OceanAwsLaunchSpecEphemeralStorageList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList">OceanAwsLaunchSpecEphemeralStorageList</a>

---

##### `images`<sup>Required</sup> <a name="images" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.images"></a>

```typescript
public readonly images: OceanAwsLaunchSpecImagesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList">OceanAwsLaunchSpecImagesList</a>

---

##### `instanceMetadataOptions`<sup>Required</sup> <a name="instanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceMetadataOptions"></a>

```typescript
public readonly instanceMetadataOptions: OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference">OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference</a>

---

##### `instanceTypesFilters`<sup>Required</sup> <a name="instanceTypesFilters" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesFilters"></a>

```typescript
public readonly instanceTypesFilters: OceanAwsLaunchSpecInstanceTypesFiltersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference">OceanAwsLaunchSpecInstanceTypesFiltersOutputReference</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.labels"></a>

```typescript
public readonly labels: OceanAwsLaunchSpecLabelsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList">OceanAwsLaunchSpecLabelsList</a>

---

##### `resourceLimits`<sup>Required</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.resourceLimits"></a>

```typescript
public readonly resourceLimits: OceanAwsLaunchSpecResourceLimitsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList">OceanAwsLaunchSpecResourceLimitsList</a>

---

##### `schedulingShutdownHours`<sup>Required</sup> <a name="schedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingShutdownHours"></a>

```typescript
public readonly schedulingShutdownHours: OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference">OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference</a>

---

##### `schedulingTask`<sup>Required</sup> <a name="schedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingTask"></a>

```typescript
public readonly schedulingTask: OceanAwsLaunchSpecSchedulingTaskList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList">OceanAwsLaunchSpecSchedulingTaskList</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.strategy"></a>

```typescript
public readonly strategy: OceanAwsLaunchSpecStrategyList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList">OceanAwsLaunchSpecStrategyList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tags"></a>

```typescript
public readonly tags: OceanAwsLaunchSpecTagsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList">OceanAwsLaunchSpecTagsList</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.taints"></a>

```typescript
public readonly taints: OceanAwsLaunchSpecTaintsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList">OceanAwsLaunchSpecTaintsList</a>

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: OceanAwsLaunchSpecUpdatePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference">OceanAwsLaunchSpecUpdatePolicyOutputReference</a>

---

##### `associatePublicIpAddressInput`<sup>Optional</sup> <a name="associatePublicIpAddressInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.associatePublicIpAddressInput"></a>

```typescript
public readonly associatePublicIpAddressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoscaleDownInput`<sup>Optional</sup> <a name="autoscaleDownInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleDownInput"></a>

```typescript
public readonly autoscaleDownInput: IResolvable | OceanAwsLaunchSpecAutoscaleDown[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown">OceanAwsLaunchSpecAutoscaleDown</a>[]

---

##### `autoscaleHeadroomsAutomaticInput`<sup>Optional</sup> <a name="autoscaleHeadroomsAutomaticInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsAutomaticInput"></a>

```typescript
public readonly autoscaleHeadroomsAutomaticInput: IResolvable | OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic">OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic</a>[]

---

##### `autoscaleHeadroomsInput`<sup>Optional</sup> <a name="autoscaleHeadroomsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.autoscaleHeadroomsInput"></a>

```typescript
public readonly autoscaleHeadroomsInput: IResolvable | OceanAwsLaunchSpecAutoscaleHeadrooms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms">OceanAwsLaunchSpecAutoscaleHeadrooms</a>[]

---

##### `blockDeviceMappingsInput`<sup>Optional</sup> <a name="blockDeviceMappingsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.blockDeviceMappingsInput"></a>

```typescript
public readonly blockDeviceMappingsInput: IResolvable | OceanAwsLaunchSpecBlockDeviceMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings">OceanAwsLaunchSpecBlockDeviceMappings</a>[]

---

##### `createOptionsInput`<sup>Optional</sup> <a name="createOptionsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.createOptionsInput"></a>

```typescript
public readonly createOptionsInput: OceanAwsLaunchSpecCreateOptions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a>

---

##### `deleteOptionsInput`<sup>Optional</sup> <a name="deleteOptionsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.deleteOptionsInput"></a>

```typescript
public readonly deleteOptionsInput: OceanAwsLaunchSpecDeleteOptions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a>

---

##### `elasticIpPoolInput`<sup>Optional</sup> <a name="elasticIpPoolInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.elasticIpPoolInput"></a>

```typescript
public readonly elasticIpPoolInput: IResolvable | OceanAwsLaunchSpecElasticIpPool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool">OceanAwsLaunchSpecElasticIpPool</a>[]

---

##### `ephemeralStorageInput`<sup>Optional</sup> <a name="ephemeralStorageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.ephemeralStorageInput"></a>

```typescript
public readonly ephemeralStorageInput: IResolvable | OceanAwsLaunchSpecEphemeralStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage">OceanAwsLaunchSpecEphemeralStorage</a>[]

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.iamInstanceProfileInput"></a>

```typescript
public readonly iamInstanceProfileInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `imagesInput`<sup>Optional</sup> <a name="imagesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imagesInput"></a>

```typescript
public readonly imagesInput: IResolvable | OceanAwsLaunchSpecImages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages">OceanAwsLaunchSpecImages</a>[]

---

##### `instanceMetadataOptionsInput`<sup>Optional</sup> <a name="instanceMetadataOptionsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceMetadataOptionsInput"></a>

```typescript
public readonly instanceMetadataOptionsInput: OceanAwsLaunchSpecInstanceMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a>

---

##### `instanceTypesFiltersInput`<sup>Optional</sup> <a name="instanceTypesFiltersInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesFiltersInput"></a>

```typescript
public readonly instanceTypesFiltersInput: OceanAwsLaunchSpecInstanceTypesFilters;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a>

---

##### `instanceTypesInput`<sup>Optional</sup> <a name="instanceTypesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypesInput"></a>

```typescript
public readonly instanceTypesInput: string[];
```

- *Type:* string[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | OceanAwsLaunchSpecLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels">OceanAwsLaunchSpecLabels</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oceanIdInput`<sup>Optional</sup> <a name="oceanIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.oceanIdInput"></a>

```typescript
public readonly oceanIdInput: string;
```

- *Type:* string

---

##### `preferredOdTypesInput`<sup>Optional</sup> <a name="preferredOdTypesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredOdTypesInput"></a>

```typescript
public readonly preferredOdTypesInput: string[];
```

- *Type:* string[]

---

##### `preferredSpotTypesInput`<sup>Optional</sup> <a name="preferredSpotTypesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredSpotTypesInput"></a>

```typescript
public readonly preferredSpotTypesInput: string[];
```

- *Type:* string[]

---

##### `reservedEnisInput`<sup>Optional</sup> <a name="reservedEnisInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.reservedEnisInput"></a>

```typescript
public readonly reservedEnisInput: number;
```

- *Type:* number

---

##### `resourceLimitsInput`<sup>Optional</sup> <a name="resourceLimitsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.resourceLimitsInput"></a>

```typescript
public readonly resourceLimitsInput: IResolvable | OceanAwsLaunchSpecResourceLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits">OceanAwsLaunchSpecResourceLimits</a>[]

---

##### `restrictScaleDownInput`<sup>Optional</sup> <a name="restrictScaleDownInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.restrictScaleDownInput"></a>

```typescript
public readonly restrictScaleDownInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rootVolumeSizeInput`<sup>Optional</sup> <a name="rootVolumeSizeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.rootVolumeSizeInput"></a>

```typescript
public readonly rootVolumeSizeInput: number;
```

- *Type:* number

---

##### `schedulingShutdownHoursInput`<sup>Optional</sup> <a name="schedulingShutdownHoursInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingShutdownHoursInput"></a>

```typescript
public readonly schedulingShutdownHoursInput: OceanAwsLaunchSpecSchedulingShutdownHours;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a>

---

##### `schedulingTaskInput`<sup>Optional</sup> <a name="schedulingTaskInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.schedulingTaskInput"></a>

```typescript
public readonly schedulingTaskInput: IResolvable | OceanAwsLaunchSpecSchedulingTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask">OceanAwsLaunchSpecSchedulingTask</a>[]

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.strategyInput"></a>

```typescript
public readonly strategyInput: IResolvable | OceanAwsLaunchSpecStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy">OceanAwsLaunchSpecStrategy</a>[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OceanAwsLaunchSpecTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags">OceanAwsLaunchSpecTags</a>[]

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | OceanAwsLaunchSpecTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints">OceanAwsLaunchSpecTaints</a>[]

---

##### `updatePolicyInput`<sup>Optional</sup> <a name="updatePolicyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.updatePolicyInput"></a>

```typescript
public readonly updatePolicyInput: OceanAwsLaunchSpecUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.oceanId"></a>

```typescript
public readonly oceanId: string;
```

- *Type:* string

---

##### `preferredOdTypes`<sup>Required</sup> <a name="preferredOdTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredOdTypes"></a>

```typescript
public readonly preferredOdTypes: string[];
```

- *Type:* string[]

---

##### `preferredSpotTypes`<sup>Required</sup> <a name="preferredSpotTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.preferredSpotTypes"></a>

```typescript
public readonly preferredSpotTypes: string[];
```

- *Type:* string[]

---

##### `reservedEnis`<sup>Required</sup> <a name="reservedEnis" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.reservedEnis"></a>

```typescript
public readonly reservedEnis: number;
```

- *Type:* number

---

##### `restrictScaleDown`<sup>Required</sup> <a name="restrictScaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.restrictScaleDown"></a>

```typescript
public readonly restrictScaleDown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rootVolumeSize`<sup>Required</sup> <a name="rootVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.rootVolumeSize"></a>

```typescript
public readonly rootVolumeSize: number;
```

- *Type:* number

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpec.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAwsLaunchSpecAutoscaleDown <a name="OceanAwsLaunchSpecAutoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecAutoscaleDown: oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#max_scale_down_percentage OceanAwsLaunchSpec#max_scale_down_percentage}. |

---

##### `maxScaleDownPercentage`<sup>Optional</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown.property.maxScaleDownPercentage"></a>

```typescript
public readonly maxScaleDownPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#max_scale_down_percentage OceanAwsLaunchSpec#max_scale_down_percentage}.

---

### OceanAwsLaunchSpecAutoscaleHeadrooms <a name="OceanAwsLaunchSpecAutoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecAutoscaleHeadrooms: oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}. |

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}.

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}.

---

##### `gpuPerUnit`<sup>Optional</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}.

---

### OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic <a name="OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecAutoscaleHeadroomsAutomatic: oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#auto_headroom_percentage OceanAwsLaunchSpec#auto_headroom_percentage}. |

---

##### `autoHeadroomPercentage`<sup>Optional</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic.property.autoHeadroomPercentage"></a>

```typescript
public readonly autoHeadroomPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#auto_headroom_percentage OceanAwsLaunchSpec#auto_headroom_percentage}.

---

### OceanAwsLaunchSpecBlockDeviceMappings <a name="OceanAwsLaunchSpecBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecBlockDeviceMappings: oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#device_name OceanAwsLaunchSpec#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.noDevice">noDevice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#no_device OceanAwsLaunchSpec#no_device}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.virtualName">virtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#virtual_name OceanAwsLaunchSpec#virtual_name}. |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#device_name OceanAwsLaunchSpec#device_name}.

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.ebs"></a>

```typescript
public readonly ebs: OceanAwsLaunchSpecBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#ebs OceanAwsLaunchSpec#ebs}

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#no_device OceanAwsLaunchSpec#no_device}.

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#virtual_name OceanAwsLaunchSpec#virtual_name}.

---

### OceanAwsLaunchSpecBlockDeviceMappingsEbs <a name="OceanAwsLaunchSpecBlockDeviceMappingsEbs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecBlockDeviceMappingsEbs: oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#delete_on_termination OceanAwsLaunchSpec#delete_on_termination}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.dynamicVolumeSize">dynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | dynamic_volume_size block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#encrypted OceanAwsLaunchSpec#encrypted}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#iops OceanAwsLaunchSpec#iops}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#kms_key_id OceanAwsLaunchSpec#kms_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#snapshot_id OceanAwsLaunchSpec#snapshot_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#throughput OceanAwsLaunchSpec#throughput}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#volume_size OceanAwsLaunchSpec#volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#volume_type OceanAwsLaunchSpec#volume_type}. |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#delete_on_termination OceanAwsLaunchSpec#delete_on_termination}.

---

##### `dynamicVolumeSize`<sup>Optional</sup> <a name="dynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.dynamicVolumeSize"></a>

```typescript
public readonly dynamicVolumeSize: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

dynamic_volume_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#dynamic_volume_size OceanAwsLaunchSpec#dynamic_volume_size}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#encrypted OceanAwsLaunchSpec#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#iops OceanAwsLaunchSpec#iops}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#kms_key_id OceanAwsLaunchSpec#kms_key_id}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#snapshot_id OceanAwsLaunchSpec#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#throughput OceanAwsLaunchSpec#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#volume_size OceanAwsLaunchSpec#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#volume_type OceanAwsLaunchSpec#volume_type}.

---

### OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize <a name="OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize: oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize">baseSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#base_size OceanAwsLaunchSpec#base_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.resource">resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#resource OceanAwsLaunchSpec#resource}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit">sizePerResourceUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#size_per_resource_unit OceanAwsLaunchSpec#size_per_resource_unit}. |

---

##### `baseSize`<sup>Required</sup> <a name="baseSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize"></a>

```typescript
public readonly baseSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#base_size OceanAwsLaunchSpec#base_size}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#resource OceanAwsLaunchSpec#resource}.

---

##### `sizePerResourceUnit`<sup>Required</sup> <a name="sizePerResourceUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit"></a>

```typescript
public readonly sizePerResourceUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#size_per_resource_unit OceanAwsLaunchSpec#size_per_resource_unit}.

---

### OceanAwsLaunchSpecConfig <a name="OceanAwsLaunchSpecConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecConfig: oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.oceanId">oceanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#ocean_id OceanAwsLaunchSpec#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#associate_public_ip_address OceanAwsLaunchSpec#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleDown">autoscaleDown</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown">OceanAwsLaunchSpecAutoscaleDown</a>[]</code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleHeadrooms">autoscaleHeadrooms</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms">OceanAwsLaunchSpecAutoscaleHeadrooms</a>[]</code> | autoscale_headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleHeadroomsAutomatic">autoscaleHeadroomsAutomatic</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic">OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic</a>[]</code> | autoscale_headrooms_automatic block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings">OceanAwsLaunchSpecBlockDeviceMappings</a>[]</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.createOptions">createOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a></code> | create_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.deleteOptions">deleteOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a></code> | delete_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.elasticIpPool">elasticIpPool</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool">OceanAwsLaunchSpecElasticIpPool</a>[]</code> | elastic_ip_pool block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.ephemeralStorage">ephemeralStorage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage">OceanAwsLaunchSpecEphemeralStorage</a>[]</code> | ephemeral_storage block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#iam_instance_profile OceanAwsLaunchSpec#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#id OceanAwsLaunchSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.images">images</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages">OceanAwsLaunchSpecImages</a>[]</code> | images block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceMetadataOptions">instanceMetadataOptions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#instance_types OceanAwsLaunchSpec#instance_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceTypesFilters">instanceTypesFilters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a></code> | instance_types_filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels">OceanAwsLaunchSpecLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#name OceanAwsLaunchSpec#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.preferredOdTypes">preferredOdTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#preferred_od_types OceanAwsLaunchSpec#preferred_od_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.preferredSpotTypes">preferredSpotTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#preferred_spot_types OceanAwsLaunchSpec#preferred_spot_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.reservedEnis">reservedEnis</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#reserved_enis OceanAwsLaunchSpec#reserved_enis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.resourceLimits">resourceLimits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits">OceanAwsLaunchSpecResourceLimits</a>[]</code> | resource_limits block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.restrictScaleDown">restrictScaleDown</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#restrict_scale_down OceanAwsLaunchSpec#restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.rootVolumeSize">rootVolumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#root_volume_size OceanAwsLaunchSpec#root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.schedulingShutdownHours">schedulingShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a></code> | scheduling_shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.schedulingTask">schedulingTask</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask">OceanAwsLaunchSpecSchedulingTask</a>[]</code> | scheduling_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#security_groups OceanAwsLaunchSpec#security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.strategy">strategy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy">OceanAwsLaunchSpecStrategy</a>[]</code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#subnet_ids OceanAwsLaunchSpec#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags">OceanAwsLaunchSpecTags</a>[]</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints">OceanAwsLaunchSpecTaints</a>[]</code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#user_data OceanAwsLaunchSpec#user_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.oceanId"></a>

```typescript
public readonly oceanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#ocean_id OceanAwsLaunchSpec#ocean_id}.

---

##### `associatePublicIpAddress`<sup>Optional</sup> <a name="associatePublicIpAddress" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#associate_public_ip_address OceanAwsLaunchSpec#associate_public_ip_address}.

---

##### `autoscaleDown`<sup>Optional</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleDown"></a>

```typescript
public readonly autoscaleDown: IResolvable | OceanAwsLaunchSpecAutoscaleDown[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown">OceanAwsLaunchSpecAutoscaleDown</a>[]

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#autoscale_down OceanAwsLaunchSpec#autoscale_down}

---

##### `autoscaleHeadrooms`<sup>Optional</sup> <a name="autoscaleHeadrooms" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleHeadrooms"></a>

```typescript
public readonly autoscaleHeadrooms: IResolvable | OceanAwsLaunchSpecAutoscaleHeadrooms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms">OceanAwsLaunchSpecAutoscaleHeadrooms</a>[]

autoscale_headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#autoscale_headrooms OceanAwsLaunchSpec#autoscale_headrooms}

---

##### `autoscaleHeadroomsAutomatic`<sup>Optional</sup> <a name="autoscaleHeadroomsAutomatic" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.autoscaleHeadroomsAutomatic"></a>

```typescript
public readonly autoscaleHeadroomsAutomatic: IResolvable | OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic">OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic</a>[]

autoscale_headrooms_automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#autoscale_headrooms_automatic OceanAwsLaunchSpec#autoscale_headrooms_automatic}

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: IResolvable | OceanAwsLaunchSpecBlockDeviceMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings">OceanAwsLaunchSpecBlockDeviceMappings</a>[]

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#block_device_mappings OceanAwsLaunchSpec#block_device_mappings}

---

##### `createOptions`<sup>Optional</sup> <a name="createOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.createOptions"></a>

```typescript
public readonly createOptions: OceanAwsLaunchSpecCreateOptions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a>

create_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#create_options OceanAwsLaunchSpec#create_options}

---

##### `deleteOptions`<sup>Optional</sup> <a name="deleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.deleteOptions"></a>

```typescript
public readonly deleteOptions: OceanAwsLaunchSpecDeleteOptions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a>

delete_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#delete_options OceanAwsLaunchSpec#delete_options}

---

##### `elasticIpPool`<sup>Optional</sup> <a name="elasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.elasticIpPool"></a>

```typescript
public readonly elasticIpPool: IResolvable | OceanAwsLaunchSpecElasticIpPool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool">OceanAwsLaunchSpecElasticIpPool</a>[]

elastic_ip_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#elastic_ip_pool OceanAwsLaunchSpec#elastic_ip_pool}

---

##### `ephemeralStorage`<sup>Optional</sup> <a name="ephemeralStorage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: IResolvable | OceanAwsLaunchSpecEphemeralStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage">OceanAwsLaunchSpecEphemeralStorage</a>[]

ephemeral_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#ephemeral_storage OceanAwsLaunchSpec#ephemeral_storage}

---

##### `iamInstanceProfile`<sup>Optional</sup> <a name="iamInstanceProfile" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#iam_instance_profile OceanAwsLaunchSpec#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#id OceanAwsLaunchSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}.

---

##### `images`<sup>Optional</sup> <a name="images" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.images"></a>

```typescript
public readonly images: IResolvable | OceanAwsLaunchSpecImages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages">OceanAwsLaunchSpecImages</a>[]

images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#images OceanAwsLaunchSpec#images}

---

##### `instanceMetadataOptions`<sup>Optional</sup> <a name="instanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceMetadataOptions"></a>

```typescript
public readonly instanceMetadataOptions: OceanAwsLaunchSpecInstanceMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#instance_metadata_options OceanAwsLaunchSpec#instance_metadata_options}

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#instance_types OceanAwsLaunchSpec#instance_types}.

---

##### `instanceTypesFilters`<sup>Optional</sup> <a name="instanceTypesFilters" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.instanceTypesFilters"></a>

```typescript
public readonly instanceTypesFilters: OceanAwsLaunchSpecInstanceTypesFilters;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a>

instance_types_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#instance_types_filters OceanAwsLaunchSpec#instance_types_filters}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | OceanAwsLaunchSpecLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels">OceanAwsLaunchSpecLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#labels OceanAwsLaunchSpec#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#name OceanAwsLaunchSpec#name}.

---

##### `preferredOdTypes`<sup>Optional</sup> <a name="preferredOdTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.preferredOdTypes"></a>

```typescript
public readonly preferredOdTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#preferred_od_types OceanAwsLaunchSpec#preferred_od_types}.

---

##### `preferredSpotTypes`<sup>Optional</sup> <a name="preferredSpotTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.preferredSpotTypes"></a>

```typescript
public readonly preferredSpotTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#preferred_spot_types OceanAwsLaunchSpec#preferred_spot_types}.

---

##### `reservedEnis`<sup>Optional</sup> <a name="reservedEnis" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.reservedEnis"></a>

```typescript
public readonly reservedEnis: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#reserved_enis OceanAwsLaunchSpec#reserved_enis}.

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.resourceLimits"></a>

```typescript
public readonly resourceLimits: IResolvable | OceanAwsLaunchSpecResourceLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits">OceanAwsLaunchSpecResourceLimits</a>[]

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#resource_limits OceanAwsLaunchSpec#resource_limits}

---

##### `restrictScaleDown`<sup>Optional</sup> <a name="restrictScaleDown" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.restrictScaleDown"></a>

```typescript
public readonly restrictScaleDown: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#restrict_scale_down OceanAwsLaunchSpec#restrict_scale_down}.

---

##### `rootVolumeSize`<sup>Optional</sup> <a name="rootVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.rootVolumeSize"></a>

```typescript
public readonly rootVolumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#root_volume_size OceanAwsLaunchSpec#root_volume_size}.

---

##### `schedulingShutdownHours`<sup>Optional</sup> <a name="schedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.schedulingShutdownHours"></a>

```typescript
public readonly schedulingShutdownHours: OceanAwsLaunchSpecSchedulingShutdownHours;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a>

scheduling_shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#scheduling_shutdown_hours OceanAwsLaunchSpec#scheduling_shutdown_hours}

---

##### `schedulingTask`<sup>Optional</sup> <a name="schedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.schedulingTask"></a>

```typescript
public readonly schedulingTask: IResolvable | OceanAwsLaunchSpecSchedulingTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask">OceanAwsLaunchSpecSchedulingTask</a>[]

scheduling_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#scheduling_task OceanAwsLaunchSpec#scheduling_task}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#security_groups OceanAwsLaunchSpec#security_groups}.

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.strategy"></a>

```typescript
public readonly strategy: IResolvable | OceanAwsLaunchSpecStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy">OceanAwsLaunchSpecStrategy</a>[]

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#strategy OceanAwsLaunchSpec#strategy}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#subnet_ids OceanAwsLaunchSpec#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | OceanAwsLaunchSpecTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags">OceanAwsLaunchSpecTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#tags OceanAwsLaunchSpec#tags}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.taints"></a>

```typescript
public readonly taints: IResolvable | OceanAwsLaunchSpecTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints">OceanAwsLaunchSpecTaints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#taints OceanAwsLaunchSpec#taints}

---

##### `updatePolicy`<sup>Optional</sup> <a name="updatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: OceanAwsLaunchSpecUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#update_policy OceanAwsLaunchSpec#update_policy}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecConfig.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#user_data OceanAwsLaunchSpec#user_data}.

---

### OceanAwsLaunchSpecCreateOptions <a name="OceanAwsLaunchSpecCreateOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecCreateOptions: oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions.property.initialNodes">initialNodes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#initial_nodes OceanAwsLaunchSpec#initial_nodes}. |

---

##### `initialNodes`<sup>Optional</sup> <a name="initialNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions.property.initialNodes"></a>

```typescript
public readonly initialNodes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#initial_nodes OceanAwsLaunchSpec#initial_nodes}.

---

### OceanAwsLaunchSpecDeleteOptions <a name="OceanAwsLaunchSpecDeleteOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecDeleteOptions: oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#force_delete OceanAwsLaunchSpec#force_delete}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.property.deleteNodes">deleteNodes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#delete_nodes OceanAwsLaunchSpec#delete_nodes}. |

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#force_delete OceanAwsLaunchSpec#force_delete}.

---

##### `deleteNodes`<sup>Optional</sup> <a name="deleteNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions.property.deleteNodes"></a>

```typescript
public readonly deleteNodes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#delete_nodes OceanAwsLaunchSpec#delete_nodes}.

---

### OceanAwsLaunchSpecElasticIpPool <a name="OceanAwsLaunchSpecElasticIpPool" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecElasticIpPool: oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool.property.tagSelector">tagSelector</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a></code> | tag_selector block. |

---

##### `tagSelector`<sup>Optional</sup> <a name="tagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool.property.tagSelector"></a>

```typescript
public readonly tagSelector: OceanAwsLaunchSpecElasticIpPoolTagSelector;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a>

tag_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#tag_selector OceanAwsLaunchSpec#tag_selector}

---

### OceanAwsLaunchSpecElasticIpPoolTagSelector <a name="OceanAwsLaunchSpecElasticIpPoolTagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecElasticIpPoolTagSelector: oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#tag_key OceanAwsLaunchSpec#tag_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.property.tagValue">tagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#tag_value OceanAwsLaunchSpec#tag_value}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#tag_key OceanAwsLaunchSpec#tag_key}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#tag_value OceanAwsLaunchSpec#tag_value}.

---

### OceanAwsLaunchSpecEphemeralStorage <a name="OceanAwsLaunchSpecEphemeralStorage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecEphemeralStorage: oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage.property.ephemeralStorageDeviceName">ephemeralStorageDeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#ephemeral_storage_device_name OceanAwsLaunchSpec#ephemeral_storage_device_name}. |

---

##### `ephemeralStorageDeviceName`<sup>Optional</sup> <a name="ephemeralStorageDeviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage.property.ephemeralStorageDeviceName"></a>

```typescript
public readonly ephemeralStorageDeviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#ephemeral_storage_device_name OceanAwsLaunchSpec#ephemeral_storage_device_name}.

---

### OceanAwsLaunchSpecImages <a name="OceanAwsLaunchSpecImages" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecImages: oceanAwsLaunchSpec.OceanAwsLaunchSpecImages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}. |

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#image_id OceanAwsLaunchSpec#image_id}.

---

### OceanAwsLaunchSpecInstanceMetadataOptions <a name="OceanAwsLaunchSpecInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecInstanceMetadataOptions: oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.property.httpTokens">httpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#http_tokens OceanAwsLaunchSpec#http_tokens}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#http_put_response_hop_limit OceanAwsLaunchSpec#http_put_response_hop_limit}. |

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#http_tokens OceanAwsLaunchSpec#http_tokens}.

---

##### `httpPutResponseHopLimit`<sup>Optional</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#http_put_response_hop_limit OceanAwsLaunchSpec#http_put_response_hop_limit}.

---

### OceanAwsLaunchSpecInstanceTypesFilters <a name="OceanAwsLaunchSpecInstanceTypesFilters" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecInstanceTypesFilters: oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.categories">categories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#categories OceanAwsLaunchSpec#categories}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.diskTypes">diskTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#disk_types OceanAwsLaunchSpec#disk_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.excludeFamilies">excludeFamilies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#exclude_families OceanAwsLaunchSpec#exclude_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.excludeMetal">excludeMetal</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#exclude_metal OceanAwsLaunchSpec#exclude_metal}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.hypervisor">hypervisor</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#hypervisor OceanAwsLaunchSpec#hypervisor}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.includeFamilies">includeFamilies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#include_families OceanAwsLaunchSpec#include_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.isEnaSupported">isEnaSupported</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#is_ena_supported OceanAwsLaunchSpec#is_ena_supported}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxGpu">maxGpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#max_gpu OceanAwsLaunchSpec#max_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxMemoryGib">maxMemoryGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#max_memory_gib OceanAwsLaunchSpec#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxNetworkPerformance">maxNetworkPerformance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#max_network_performance OceanAwsLaunchSpec#max_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxVcpu">maxVcpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#max_vcpu OceanAwsLaunchSpec#max_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minEnis">minEnis</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#min_enis OceanAwsLaunchSpec#min_enis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minGpu">minGpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#min_gpu OceanAwsLaunchSpec#min_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minMemoryGib">minMemoryGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#min_memory_gib OceanAwsLaunchSpec#min_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minNetworkPerformance">minNetworkPerformance</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#min_network_performance OceanAwsLaunchSpec#min_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minVcpu">minVcpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#min_vcpu OceanAwsLaunchSpec#min_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.rootDeviceTypes">rootDeviceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#root_device_types OceanAwsLaunchSpec#root_device_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.virtualizationTypes">virtualizationTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#virtualization_types OceanAwsLaunchSpec#virtualization_types}. |

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.categories"></a>

```typescript
public readonly categories: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#categories OceanAwsLaunchSpec#categories}.

---

##### `diskTypes`<sup>Optional</sup> <a name="diskTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.diskTypes"></a>

```typescript
public readonly diskTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#disk_types OceanAwsLaunchSpec#disk_types}.

---

##### `excludeFamilies`<sup>Optional</sup> <a name="excludeFamilies" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.excludeFamilies"></a>

```typescript
public readonly excludeFamilies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#exclude_families OceanAwsLaunchSpec#exclude_families}.

---

##### `excludeMetal`<sup>Optional</sup> <a name="excludeMetal" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.excludeMetal"></a>

```typescript
public readonly excludeMetal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#exclude_metal OceanAwsLaunchSpec#exclude_metal}.

---

##### `hypervisor`<sup>Optional</sup> <a name="hypervisor" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.hypervisor"></a>

```typescript
public readonly hypervisor: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#hypervisor OceanAwsLaunchSpec#hypervisor}.

---

##### `includeFamilies`<sup>Optional</sup> <a name="includeFamilies" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.includeFamilies"></a>

```typescript
public readonly includeFamilies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#include_families OceanAwsLaunchSpec#include_families}.

---

##### `isEnaSupported`<sup>Optional</sup> <a name="isEnaSupported" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.isEnaSupported"></a>

```typescript
public readonly isEnaSupported: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#is_ena_supported OceanAwsLaunchSpec#is_ena_supported}.

---

##### `maxGpu`<sup>Optional</sup> <a name="maxGpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxGpu"></a>

```typescript
public readonly maxGpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#max_gpu OceanAwsLaunchSpec#max_gpu}.

---

##### `maxMemoryGib`<sup>Optional</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxMemoryGib"></a>

```typescript
public readonly maxMemoryGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#max_memory_gib OceanAwsLaunchSpec#max_memory_gib}.

---

##### `maxNetworkPerformance`<sup>Optional</sup> <a name="maxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxNetworkPerformance"></a>

```typescript
public readonly maxNetworkPerformance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#max_network_performance OceanAwsLaunchSpec#max_network_performance}.

---

##### `maxVcpu`<sup>Optional</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.maxVcpu"></a>

```typescript
public readonly maxVcpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#max_vcpu OceanAwsLaunchSpec#max_vcpu}.

---

##### `minEnis`<sup>Optional</sup> <a name="minEnis" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minEnis"></a>

```typescript
public readonly minEnis: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#min_enis OceanAwsLaunchSpec#min_enis}.

---

##### `minGpu`<sup>Optional</sup> <a name="minGpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minGpu"></a>

```typescript
public readonly minGpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#min_gpu OceanAwsLaunchSpec#min_gpu}.

---

##### `minMemoryGib`<sup>Optional</sup> <a name="minMemoryGib" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minMemoryGib"></a>

```typescript
public readonly minMemoryGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#min_memory_gib OceanAwsLaunchSpec#min_memory_gib}.

---

##### `minNetworkPerformance`<sup>Optional</sup> <a name="minNetworkPerformance" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minNetworkPerformance"></a>

```typescript
public readonly minNetworkPerformance: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#min_network_performance OceanAwsLaunchSpec#min_network_performance}.

---

##### `minVcpu`<sup>Optional</sup> <a name="minVcpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.minVcpu"></a>

```typescript
public readonly minVcpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#min_vcpu OceanAwsLaunchSpec#min_vcpu}.

---

##### `rootDeviceTypes`<sup>Optional</sup> <a name="rootDeviceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.rootDeviceTypes"></a>

```typescript
public readonly rootDeviceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#root_device_types OceanAwsLaunchSpec#root_device_types}.

---

##### `virtualizationTypes`<sup>Optional</sup> <a name="virtualizationTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters.property.virtualizationTypes"></a>

```typescript
public readonly virtualizationTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#virtualization_types OceanAwsLaunchSpec#virtualization_types}.

---

### OceanAwsLaunchSpecLabels <a name="OceanAwsLaunchSpecLabels" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecLabels: oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}.

---

### OceanAwsLaunchSpecResourceLimits <a name="OceanAwsLaunchSpecResourceLimits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecResourceLimits: oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#max_instance_count OceanAwsLaunchSpec#max_instance_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#min_instance_count OceanAwsLaunchSpec#min_instance_count}. |

---

##### `maxInstanceCount`<sup>Optional</sup> <a name="maxInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#max_instance_count OceanAwsLaunchSpec#max_instance_count}.

---

##### `minInstanceCount`<sup>Optional</sup> <a name="minInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#min_instance_count OceanAwsLaunchSpec#min_instance_count}.

---

### OceanAwsLaunchSpecSchedulingShutdownHours <a name="OceanAwsLaunchSpecSchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecSchedulingShutdownHours: oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.property.timeWindows">timeWindows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#time_windows OceanAwsLaunchSpec#time_windows}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}. |

---

##### `timeWindows`<sup>Required</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.property.timeWindows"></a>

```typescript
public readonly timeWindows: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#time_windows OceanAwsLaunchSpec#time_windows}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}.

---

### OceanAwsLaunchSpecSchedulingTask <a name="OceanAwsLaunchSpecSchedulingTask" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecSchedulingTask: oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.cronExpression">cronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#cron_expression OceanAwsLaunchSpec#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.taskType">taskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#task_type OceanAwsLaunchSpec#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.taskHeadroom">taskHeadroom</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom">OceanAwsLaunchSpecSchedulingTaskTaskHeadroom</a>[]</code> | task_headroom block. |

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#cron_expression OceanAwsLaunchSpec#cron_expression}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#is_enabled OceanAwsLaunchSpec#is_enabled}.

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#task_type OceanAwsLaunchSpec#task_type}.

---

##### `taskHeadroom`<sup>Optional</sup> <a name="taskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask.property.taskHeadroom"></a>

```typescript
public readonly taskHeadroom: IResolvable | OceanAwsLaunchSpecSchedulingTaskTaskHeadroom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom">OceanAwsLaunchSpecSchedulingTaskTaskHeadroom</a>[]

task_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#task_headroom OceanAwsLaunchSpec#task_headroom}

---

### OceanAwsLaunchSpecSchedulingTaskTaskHeadroom <a name="OceanAwsLaunchSpecSchedulingTaskTaskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecSchedulingTaskTaskHeadroom: oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}. |

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#num_of_units OceanAwsLaunchSpec#num_of_units}.

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#cpu_per_unit OceanAwsLaunchSpec#cpu_per_unit}.

---

##### `gpuPerUnit`<sup>Optional</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#gpu_per_unit OceanAwsLaunchSpec#gpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#memory_per_unit OceanAwsLaunchSpec#memory_per_unit}.

---

### OceanAwsLaunchSpecStrategy <a name="OceanAwsLaunchSpecStrategy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecStrategy: oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#draining_timeout OceanAwsLaunchSpec#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.property.spotPercentage">spotPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#spot_percentage OceanAwsLaunchSpec#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.property.utilizeCommitments">utilizeCommitments</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#utilize_commitments OceanAwsLaunchSpec#utilize_commitments}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.property.utilizeReservedInstances">utilizeReservedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#utilize_reserved_instances OceanAwsLaunchSpec#utilize_reserved_instances}. |

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#draining_timeout OceanAwsLaunchSpec#draining_timeout}.

---

##### `spotPercentage`<sup>Optional</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.property.spotPercentage"></a>

```typescript
public readonly spotPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#spot_percentage OceanAwsLaunchSpec#spot_percentage}.

---

##### `utilizeCommitments`<sup>Optional</sup> <a name="utilizeCommitments" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.property.utilizeCommitments"></a>

```typescript
public readonly utilizeCommitments: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#utilize_commitments OceanAwsLaunchSpec#utilize_commitments}.

---

##### `utilizeReservedInstances`<sup>Optional</sup> <a name="utilizeReservedInstances" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy.property.utilizeReservedInstances"></a>

```typescript
public readonly utilizeReservedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#utilize_reserved_instances OceanAwsLaunchSpec#utilize_reserved_instances}.

---

### OceanAwsLaunchSpecTags <a name="OceanAwsLaunchSpecTags" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecTags: oceanAwsLaunchSpec.OceanAwsLaunchSpecTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}.

---

### OceanAwsLaunchSpecTaints <a name="OceanAwsLaunchSpecTaints" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecTaints: oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.effect">effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#effect OceanAwsLaunchSpec#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#effect OceanAwsLaunchSpec#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#key OceanAwsLaunchSpec#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#value OceanAwsLaunchSpec#value}.

---

### OceanAwsLaunchSpecUpdatePolicy <a name="OceanAwsLaunchSpecUpdatePolicy" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecUpdatePolicy: oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.property.shouldRoll">shouldRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#should_roll OceanAwsLaunchSpec#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.property.shouldRoll"></a>

```typescript
public readonly shouldRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#should_roll OceanAwsLaunchSpec#should_roll}.

---

##### `rollConfig`<sup>Optional</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy.property.rollConfig"></a>

```typescript
public readonly rollConfig: OceanAwsLaunchSpecUpdatePolicyRollConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#roll_config OceanAwsLaunchSpec#roll_config}

---

### OceanAwsLaunchSpecUpdatePolicyRollConfig <a name="OceanAwsLaunchSpecUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

const oceanAwsLaunchSpecUpdatePolicyRollConfig: oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig.property.batchSizePercentage">batchSizePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#batch_size_percentage OceanAwsLaunchSpec#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig.property.respectPdb">respectPdb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#respect_pdb OceanAwsLaunchSpec#respect_pdb}. |

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#batch_size_percentage OceanAwsLaunchSpec#batch_size_percentage}.

---

##### `respectPdb`<sup>Optional</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig.property.respectPdb"></a>

```typescript
public readonly respectPdb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/ocean_aws_launch_spec#respect_pdb OceanAwsLaunchSpec#respect_pdb}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAwsLaunchSpecAutoscaleDownList <a name="OceanAwsLaunchSpecAutoscaleDownList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecAutoscaleDownOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown">OceanAwsLaunchSpecAutoscaleDown</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecAutoscaleDown[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown">OceanAwsLaunchSpecAutoscaleDown</a>[]

---


### OceanAwsLaunchSpecAutoscaleDownOutputReference <a name="OceanAwsLaunchSpecAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resetMaxScaleDownPercentage">resetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxScaleDownPercentage` <a name="resetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```typescript
public resetMaxScaleDownPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">maxScaleDownPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown">OceanAwsLaunchSpecAutoscaleDown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxScaleDownPercentageInput`<sup>Optional</sup> <a name="maxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```typescript
public readonly maxScaleDownPercentageInput: number;
```

- *Type:* number

---

##### `maxScaleDownPercentage`<sup>Required</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```typescript
public readonly maxScaleDownPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDownOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecAutoscaleDown;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleDown">OceanAwsLaunchSpecAutoscaleDown</a>

---


### OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList <a name="OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic">OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic">OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic</a>[]

---


### OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference <a name="OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resetAutoHeadroomPercentage">resetAutoHeadroomPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoHeadroomPercentage` <a name="resetAutoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.resetAutoHeadroomPercentage"></a>

```typescript
public resetAutoHeadroomPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentageInput">autoHeadroomPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentage">autoHeadroomPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic">OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoHeadroomPercentageInput`<sup>Optional</sup> <a name="autoHeadroomPercentageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentageInput"></a>

```typescript
public readonly autoHeadroomPercentageInput: number;
```

- *Type:* number

---

##### `autoHeadroomPercentage`<sup>Required</sup> <a name="autoHeadroomPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.autoHeadroomPercentage"></a>

```typescript
public readonly autoHeadroomPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomaticOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic">OceanAwsLaunchSpecAutoscaleHeadroomsAutomatic</a>

---


### OceanAwsLaunchSpecAutoscaleHeadroomsList <a name="OceanAwsLaunchSpecAutoscaleHeadroomsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms">OceanAwsLaunchSpecAutoscaleHeadrooms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecAutoscaleHeadrooms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms">OceanAwsLaunchSpecAutoscaleHeadrooms</a>[]

---


### OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference <a name="OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetGpuPerUnit">resetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetCpuPerUnit"></a>

```typescript
public resetCpuPerUnit(): void
```

##### `resetGpuPerUnit` <a name="resetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetGpuPerUnit"></a>

```typescript
public resetGpuPerUnit(): void
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.resetMemoryPerUnit"></a>

```typescript
public resetMemoryPerUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnitInput">gpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms">OceanAwsLaunchSpecAutoscaleHeadrooms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnitInput"></a>

```typescript
public readonly cpuPerUnitInput: number;
```

- *Type:* number

---

##### `gpuPerUnitInput`<sup>Optional</sup> <a name="gpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnitInput"></a>

```typescript
public readonly gpuPerUnitInput: number;
```

- *Type:* number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnitInput"></a>

```typescript
public readonly memoryPerUnitInput: number;
```

- *Type:* number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnitsInput"></a>

```typescript
public readonly numOfUnitsInput: number;
```

- *Type:* number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

---

##### `gpuPerUnit`<sup>Required</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadroomsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecAutoscaleHeadrooms;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecAutoscaleHeadrooms">OceanAwsLaunchSpecAutoscaleHeadrooms</a>

---


### OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference <a name="OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput">baseSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput">sizePerResourceUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize">baseSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit">sizePerResourceUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseSizeInput`<sup>Optional</sup> <a name="baseSizeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput"></a>

```typescript
public readonly baseSizeInput: number;
```

- *Type:* number

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `sizePerResourceUnitInput`<sup>Optional</sup> <a name="sizePerResourceUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput"></a>

```typescript
public readonly sizePerResourceUnitInput: number;
```

- *Type:* number

---

##### `baseSize`<sup>Required</sup> <a name="baseSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize"></a>

```typescript
public readonly baseSize: number;
```

- *Type:* number

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `sizePerResourceUnit`<sup>Required</sup> <a name="sizePerResourceUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit"></a>

```typescript
public readonly sizePerResourceUnit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

---


### OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference <a name="OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize">putDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize">resetDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamicVolumeSize` <a name="putDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize"></a>

```typescript
public putDynamicVolumeSize(value: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetDynamicVolumeSize` <a name="resetDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize"></a>

```typescript
public resetDynamicVolumeSize(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetIops` <a name="resetIops" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize">dynamicVolumeSize</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput">dynamicVolumeSizeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicVolumeSize`<sup>Required</sup> <a name="dynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize"></a>

```typescript
public readonly dynamicVolumeSize: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a>

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dynamicVolumeSizeInput`<sup>Optional</sup> <a name="dynamicVolumeSizeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput"></a>

```typescript
public readonly dynamicVolumeSizeInput: OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsLaunchSpecBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsLaunchSpecBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a>

---


### OceanAwsLaunchSpecBlockDeviceMappingsList <a name="OceanAwsLaunchSpecBlockDeviceMappingsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings">OceanAwsLaunchSpecBlockDeviceMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecBlockDeviceMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings">OceanAwsLaunchSpecBlockDeviceMappings</a>[]

---


### OceanAwsLaunchSpecBlockDeviceMappingsOutputReference <a name="OceanAwsLaunchSpecBlockDeviceMappingsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetNoDevice">resetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetVirtualName">resetVirtualName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbs` <a name="putEbs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.putEbs"></a>

```typescript
public putEbs(value: OceanAwsLaunchSpecBlockDeviceMappingsEbs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a>

---

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetEbs` <a name="resetEbs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetEbs"></a>

```typescript
public resetEbs(): void
```

##### `resetNoDevice` <a name="resetNoDevice" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```typescript
public resetNoDevice(): void
```

##### `resetVirtualName` <a name="resetVirtualName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```typescript
public resetVirtualName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference">OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.ebsInput">ebsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.noDeviceInput">noDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualNameInput">virtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings">OceanAwsLaunchSpecBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.ebs"></a>

```typescript
public readonly ebs: OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference">OceanAwsLaunchSpecBlockDeviceMappingsEbsOutputReference</a>

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```typescript
public readonly ebsInput: OceanAwsLaunchSpecBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsEbs">OceanAwsLaunchSpecBlockDeviceMappingsEbs</a>

---

##### `noDeviceInput`<sup>Optional</sup> <a name="noDeviceInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```typescript
public readonly noDeviceInput: string;
```

- *Type:* string

---

##### `virtualNameInput`<sup>Optional</sup> <a name="virtualNameInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```typescript
public readonly virtualNameInput: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecBlockDeviceMappings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecBlockDeviceMappings">OceanAwsLaunchSpecBlockDeviceMappings</a>

---


### OceanAwsLaunchSpecCreateOptionsOutputReference <a name="OceanAwsLaunchSpecCreateOptionsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resetInitialNodes">resetInitialNodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInitialNodes` <a name="resetInitialNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.resetInitialNodes"></a>

```typescript
public resetInitialNodes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.initialNodesInput">initialNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.initialNodes">initialNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initialNodesInput`<sup>Optional</sup> <a name="initialNodesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.initialNodesInput"></a>

```typescript
public readonly initialNodesInput: number;
```

- *Type:* number

---

##### `initialNodes`<sup>Required</sup> <a name="initialNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.initialNodes"></a>

```typescript
public readonly initialNodes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsLaunchSpecCreateOptions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecCreateOptions">OceanAwsLaunchSpecCreateOptions</a>

---


### OceanAwsLaunchSpecDeleteOptionsOutputReference <a name="OceanAwsLaunchSpecDeleteOptionsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resetDeleteNodes">resetDeleteNodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteNodes` <a name="resetDeleteNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.resetDeleteNodes"></a>

```typescript
public resetDeleteNodes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.deleteNodesInput">deleteNodesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.deleteNodes">deleteNodes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteNodesInput`<sup>Optional</sup> <a name="deleteNodesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.deleteNodesInput"></a>

```typescript
public readonly deleteNodesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteNodes`<sup>Required</sup> <a name="deleteNodes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.deleteNodes"></a>

```typescript
public readonly deleteNodes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsLaunchSpecDeleteOptions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecDeleteOptions">OceanAwsLaunchSpecDeleteOptions</a>

---


### OceanAwsLaunchSpecElasticIpPoolList <a name="OceanAwsLaunchSpecElasticIpPoolList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecElasticIpPoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool">OceanAwsLaunchSpecElasticIpPool</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecElasticIpPool[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool">OceanAwsLaunchSpecElasticIpPool</a>[]

---


### OceanAwsLaunchSpecElasticIpPoolOutputReference <a name="OceanAwsLaunchSpecElasticIpPoolOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.putTagSelector">putTagSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resetTagSelector">resetTagSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagSelector` <a name="putTagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.putTagSelector"></a>

```typescript
public putTagSelector(value: OceanAwsLaunchSpecElasticIpPoolTagSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.putTagSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a>

---

##### `resetTagSelector` <a name="resetTagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.resetTagSelector"></a>

```typescript
public resetTagSelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.tagSelector">tagSelector</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference">OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.tagSelectorInput">tagSelectorInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool">OceanAwsLaunchSpecElasticIpPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagSelector`<sup>Required</sup> <a name="tagSelector" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.tagSelector"></a>

```typescript
public readonly tagSelector: OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference">OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference</a>

---

##### `tagSelectorInput`<sup>Optional</sup> <a name="tagSelectorInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.tagSelectorInput"></a>

```typescript
public readonly tagSelectorInput: OceanAwsLaunchSpecElasticIpPoolTagSelector;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecElasticIpPool;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPool">OceanAwsLaunchSpecElasticIpPool</a>

---


### OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference <a name="OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsLaunchSpecElasticIpPoolTagSelector;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecElasticIpPoolTagSelector">OceanAwsLaunchSpecElasticIpPoolTagSelector</a>

---


### OceanAwsLaunchSpecEphemeralStorageList <a name="OceanAwsLaunchSpecEphemeralStorageList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecEphemeralStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage">OceanAwsLaunchSpecEphemeralStorage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecEphemeralStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage">OceanAwsLaunchSpecEphemeralStorage</a>[]

---


### OceanAwsLaunchSpecEphemeralStorageOutputReference <a name="OceanAwsLaunchSpecEphemeralStorageOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.resetEphemeralStorageDeviceName">resetEphemeralStorageDeviceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEphemeralStorageDeviceName` <a name="resetEphemeralStorageDeviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.resetEphemeralStorageDeviceName"></a>

```typescript
public resetEphemeralStorageDeviceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.ephemeralStorageDeviceNameInput">ephemeralStorageDeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.ephemeralStorageDeviceName">ephemeralStorageDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage">OceanAwsLaunchSpecEphemeralStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ephemeralStorageDeviceNameInput`<sup>Optional</sup> <a name="ephemeralStorageDeviceNameInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.ephemeralStorageDeviceNameInput"></a>

```typescript
public readonly ephemeralStorageDeviceNameInput: string;
```

- *Type:* string

---

##### `ephemeralStorageDeviceName`<sup>Required</sup> <a name="ephemeralStorageDeviceName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.ephemeralStorageDeviceName"></a>

```typescript
public readonly ephemeralStorageDeviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecEphemeralStorage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecEphemeralStorage">OceanAwsLaunchSpecEphemeralStorage</a>

---


### OceanAwsLaunchSpecImagesList <a name="OceanAwsLaunchSpecImagesList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages">OceanAwsLaunchSpecImages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecImages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages">OceanAwsLaunchSpecImages</a>[]

---


### OceanAwsLaunchSpecImagesOutputReference <a name="OceanAwsLaunchSpecImagesOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.resetImageId">resetImageId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageId` <a name="resetImageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.resetImageId"></a>

```typescript
public resetImageId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages">OceanAwsLaunchSpecImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecImages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecImages">OceanAwsLaunchSpecImages</a>

---


### OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference <a name="OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">resetHttpPutResponseHopLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpPutResponseHopLimit` <a name="resetHttpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```typescript
public resetHttpPutResponseHopLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">httpPutResponseHopLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokensInput">httpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimitInput`<sup>Optional</sup> <a name="httpPutResponseHopLimitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```typescript
public readonly httpPutResponseHopLimitInput: number;
```

- *Type:* number

---

##### `httpTokensInput`<sup>Optional</sup> <a name="httpTokensInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```typescript
public readonly httpTokensInput: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsLaunchSpecInstanceMetadataOptions;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceMetadataOptions">OceanAwsLaunchSpecInstanceMetadataOptions</a>

---


### OceanAwsLaunchSpecInstanceTypesFiltersOutputReference <a name="OceanAwsLaunchSpecInstanceTypesFiltersOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetCategories">resetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetDiskTypes">resetDiskTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetExcludeFamilies">resetExcludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetExcludeMetal">resetExcludeMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetHypervisor">resetHypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetIncludeFamilies">resetIncludeFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetIsEnaSupported">resetIsEnaSupported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxGpu">resetMaxGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxMemoryGib">resetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxNetworkPerformance">resetMaxNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxVcpu">resetMaxVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinEnis">resetMinEnis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinGpu">resetMinGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinMemoryGib">resetMinMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinNetworkPerformance">resetMinNetworkPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinVcpu">resetMinVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetRootDeviceTypes">resetRootDeviceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetVirtualizationTypes">resetVirtualizationTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCategories` <a name="resetCategories" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetCategories"></a>

```typescript
public resetCategories(): void
```

##### `resetDiskTypes` <a name="resetDiskTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetDiskTypes"></a>

```typescript
public resetDiskTypes(): void
```

##### `resetExcludeFamilies` <a name="resetExcludeFamilies" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetExcludeFamilies"></a>

```typescript
public resetExcludeFamilies(): void
```

##### `resetExcludeMetal` <a name="resetExcludeMetal" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetExcludeMetal"></a>

```typescript
public resetExcludeMetal(): void
```

##### `resetHypervisor` <a name="resetHypervisor" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetHypervisor"></a>

```typescript
public resetHypervisor(): void
```

##### `resetIncludeFamilies` <a name="resetIncludeFamilies" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetIncludeFamilies"></a>

```typescript
public resetIncludeFamilies(): void
```

##### `resetIsEnaSupported` <a name="resetIsEnaSupported" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetIsEnaSupported"></a>

```typescript
public resetIsEnaSupported(): void
```

##### `resetMaxGpu` <a name="resetMaxGpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxGpu"></a>

```typescript
public resetMaxGpu(): void
```

##### `resetMaxMemoryGib` <a name="resetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxMemoryGib"></a>

```typescript
public resetMaxMemoryGib(): void
```

##### `resetMaxNetworkPerformance` <a name="resetMaxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxNetworkPerformance"></a>

```typescript
public resetMaxNetworkPerformance(): void
```

##### `resetMaxVcpu` <a name="resetMaxVcpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMaxVcpu"></a>

```typescript
public resetMaxVcpu(): void
```

##### `resetMinEnis` <a name="resetMinEnis" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinEnis"></a>

```typescript
public resetMinEnis(): void
```

##### `resetMinGpu` <a name="resetMinGpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinGpu"></a>

```typescript
public resetMinGpu(): void
```

##### `resetMinMemoryGib` <a name="resetMinMemoryGib" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinMemoryGib"></a>

```typescript
public resetMinMemoryGib(): void
```

##### `resetMinNetworkPerformance` <a name="resetMinNetworkPerformance" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinNetworkPerformance"></a>

```typescript
public resetMinNetworkPerformance(): void
```

##### `resetMinVcpu` <a name="resetMinVcpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetMinVcpu"></a>

```typescript
public resetMinVcpu(): void
```

##### `resetRootDeviceTypes` <a name="resetRootDeviceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetRootDeviceTypes"></a>

```typescript
public resetRootDeviceTypes(): void
```

##### `resetVirtualizationTypes` <a name="resetVirtualizationTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.resetVirtualizationTypes"></a>

```typescript
public resetVirtualizationTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.categoriesInput">categoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.diskTypesInput">diskTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeFamiliesInput">excludeFamiliesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeMetalInput">excludeMetalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.hypervisorInput">hypervisorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.includeFamiliesInput">includeFamiliesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.isEnaSupportedInput">isEnaSupportedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxGpuInput">maxGpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxMemoryGibInput">maxMemoryGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxNetworkPerformanceInput">maxNetworkPerformanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxVcpuInput">maxVcpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minEnisInput">minEnisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minGpuInput">minGpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minMemoryGibInput">minMemoryGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minNetworkPerformanceInput">minNetworkPerformanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minVcpuInput">minVcpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.rootDeviceTypesInput">rootDeviceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.virtualizationTypesInput">virtualizationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.categories">categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.diskTypes">diskTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeFamilies">excludeFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeMetal">excludeMetal</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.hypervisor">hypervisor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.includeFamilies">includeFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.isEnaSupported">isEnaSupported</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxGpu">maxGpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxMemoryGib">maxMemoryGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxNetworkPerformance">maxNetworkPerformance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxVcpu">maxVcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minEnis">minEnis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minGpu">minGpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minMemoryGib">minMemoryGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minNetworkPerformance">minNetworkPerformance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minVcpu">minVcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.rootDeviceTypes">rootDeviceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.virtualizationTypes">virtualizationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoriesInput`<sup>Optional</sup> <a name="categoriesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.categoriesInput"></a>

```typescript
public readonly categoriesInput: string[];
```

- *Type:* string[]

---

##### `diskTypesInput`<sup>Optional</sup> <a name="diskTypesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.diskTypesInput"></a>

```typescript
public readonly diskTypesInput: string[];
```

- *Type:* string[]

---

##### `excludeFamiliesInput`<sup>Optional</sup> <a name="excludeFamiliesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeFamiliesInput"></a>

```typescript
public readonly excludeFamiliesInput: string[];
```

- *Type:* string[]

---

##### `excludeMetalInput`<sup>Optional</sup> <a name="excludeMetalInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeMetalInput"></a>

```typescript
public readonly excludeMetalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hypervisorInput`<sup>Optional</sup> <a name="hypervisorInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.hypervisorInput"></a>

```typescript
public readonly hypervisorInput: string[];
```

- *Type:* string[]

---

##### `includeFamiliesInput`<sup>Optional</sup> <a name="includeFamiliesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.includeFamiliesInput"></a>

```typescript
public readonly includeFamiliesInput: string[];
```

- *Type:* string[]

---

##### `isEnaSupportedInput`<sup>Optional</sup> <a name="isEnaSupportedInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.isEnaSupportedInput"></a>

```typescript
public readonly isEnaSupportedInput: string;
```

- *Type:* string

---

##### `maxGpuInput`<sup>Optional</sup> <a name="maxGpuInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxGpuInput"></a>

```typescript
public readonly maxGpuInput: number;
```

- *Type:* number

---

##### `maxMemoryGibInput`<sup>Optional</sup> <a name="maxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxMemoryGibInput"></a>

```typescript
public readonly maxMemoryGibInput: number;
```

- *Type:* number

---

##### `maxNetworkPerformanceInput`<sup>Optional</sup> <a name="maxNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxNetworkPerformanceInput"></a>

```typescript
public readonly maxNetworkPerformanceInput: number;
```

- *Type:* number

---

##### `maxVcpuInput`<sup>Optional</sup> <a name="maxVcpuInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxVcpuInput"></a>

```typescript
public readonly maxVcpuInput: number;
```

- *Type:* number

---

##### `minEnisInput`<sup>Optional</sup> <a name="minEnisInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minEnisInput"></a>

```typescript
public readonly minEnisInput: number;
```

- *Type:* number

---

##### `minGpuInput`<sup>Optional</sup> <a name="minGpuInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minGpuInput"></a>

```typescript
public readonly minGpuInput: number;
```

- *Type:* number

---

##### `minMemoryGibInput`<sup>Optional</sup> <a name="minMemoryGibInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minMemoryGibInput"></a>

```typescript
public readonly minMemoryGibInput: number;
```

- *Type:* number

---

##### `minNetworkPerformanceInput`<sup>Optional</sup> <a name="minNetworkPerformanceInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minNetworkPerformanceInput"></a>

```typescript
public readonly minNetworkPerformanceInput: number;
```

- *Type:* number

---

##### `minVcpuInput`<sup>Optional</sup> <a name="minVcpuInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minVcpuInput"></a>

```typescript
public readonly minVcpuInput: number;
```

- *Type:* number

---

##### `rootDeviceTypesInput`<sup>Optional</sup> <a name="rootDeviceTypesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.rootDeviceTypesInput"></a>

```typescript
public readonly rootDeviceTypesInput: string[];
```

- *Type:* string[]

---

##### `virtualizationTypesInput`<sup>Optional</sup> <a name="virtualizationTypesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.virtualizationTypesInput"></a>

```typescript
public readonly virtualizationTypesInput: string[];
```

- *Type:* string[]

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.categories"></a>

```typescript
public readonly categories: string[];
```

- *Type:* string[]

---

##### `diskTypes`<sup>Required</sup> <a name="diskTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.diskTypes"></a>

```typescript
public readonly diskTypes: string[];
```

- *Type:* string[]

---

##### `excludeFamilies`<sup>Required</sup> <a name="excludeFamilies" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeFamilies"></a>

```typescript
public readonly excludeFamilies: string[];
```

- *Type:* string[]

---

##### `excludeMetal`<sup>Required</sup> <a name="excludeMetal" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.excludeMetal"></a>

```typescript
public readonly excludeMetal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.hypervisor"></a>

```typescript
public readonly hypervisor: string[];
```

- *Type:* string[]

---

##### `includeFamilies`<sup>Required</sup> <a name="includeFamilies" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.includeFamilies"></a>

```typescript
public readonly includeFamilies: string[];
```

- *Type:* string[]

---

##### `isEnaSupported`<sup>Required</sup> <a name="isEnaSupported" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.isEnaSupported"></a>

```typescript
public readonly isEnaSupported: string;
```

- *Type:* string

---

##### `maxGpu`<sup>Required</sup> <a name="maxGpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxGpu"></a>

```typescript
public readonly maxGpu: number;
```

- *Type:* number

---

##### `maxMemoryGib`<sup>Required</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxMemoryGib"></a>

```typescript
public readonly maxMemoryGib: number;
```

- *Type:* number

---

##### `maxNetworkPerformance`<sup>Required</sup> <a name="maxNetworkPerformance" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxNetworkPerformance"></a>

```typescript
public readonly maxNetworkPerformance: number;
```

- *Type:* number

---

##### `maxVcpu`<sup>Required</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.maxVcpu"></a>

```typescript
public readonly maxVcpu: number;
```

- *Type:* number

---

##### `minEnis`<sup>Required</sup> <a name="minEnis" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minEnis"></a>

```typescript
public readonly minEnis: number;
```

- *Type:* number

---

##### `minGpu`<sup>Required</sup> <a name="minGpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minGpu"></a>

```typescript
public readonly minGpu: number;
```

- *Type:* number

---

##### `minMemoryGib`<sup>Required</sup> <a name="minMemoryGib" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minMemoryGib"></a>

```typescript
public readonly minMemoryGib: number;
```

- *Type:* number

---

##### `minNetworkPerformance`<sup>Required</sup> <a name="minNetworkPerformance" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minNetworkPerformance"></a>

```typescript
public readonly minNetworkPerformance: number;
```

- *Type:* number

---

##### `minVcpu`<sup>Required</sup> <a name="minVcpu" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.minVcpu"></a>

```typescript
public readonly minVcpu: number;
```

- *Type:* number

---

##### `rootDeviceTypes`<sup>Required</sup> <a name="rootDeviceTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.rootDeviceTypes"></a>

```typescript
public readonly rootDeviceTypes: string[];
```

- *Type:* string[]

---

##### `virtualizationTypes`<sup>Required</sup> <a name="virtualizationTypes" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.virtualizationTypes"></a>

```typescript
public readonly virtualizationTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsLaunchSpecInstanceTypesFilters;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecInstanceTypesFilters">OceanAwsLaunchSpecInstanceTypesFilters</a>

---


### OceanAwsLaunchSpecLabelsList <a name="OceanAwsLaunchSpecLabelsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels">OceanAwsLaunchSpecLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels">OceanAwsLaunchSpecLabels</a>[]

---


### OceanAwsLaunchSpecLabelsOutputReference <a name="OceanAwsLaunchSpecLabelsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels">OceanAwsLaunchSpecLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecLabels">OceanAwsLaunchSpecLabels</a>

---


### OceanAwsLaunchSpecResourceLimitsList <a name="OceanAwsLaunchSpecResourceLimitsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecResourceLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits">OceanAwsLaunchSpecResourceLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecResourceLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits">OceanAwsLaunchSpecResourceLimits</a>[]

---


### OceanAwsLaunchSpecResourceLimitsOutputReference <a name="OceanAwsLaunchSpecResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resetMaxInstanceCount">resetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resetMinInstanceCount">resetMinInstanceCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxInstanceCount` <a name="resetMaxInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resetMaxInstanceCount"></a>

```typescript
public resetMaxInstanceCount(): void
```

##### `resetMinInstanceCount` <a name="resetMinInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.resetMinInstanceCount"></a>

```typescript
public resetMinInstanceCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits">OceanAwsLaunchSpecResourceLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.maxInstanceCountInput"></a>

```typescript
public readonly maxInstanceCountInput: number;
```

- *Type:* number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.minInstanceCountInput"></a>

```typescript
public readonly minInstanceCountInput: number;
```

- *Type:* number

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecResourceLimits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecResourceLimits">OceanAwsLaunchSpecResourceLimits</a>

---


### OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference <a name="OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.timeWindowsInput">timeWindowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.timeWindows">timeWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeWindowsInput`<sup>Optional</sup> <a name="timeWindowsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.timeWindowsInput"></a>

```typescript
public readonly timeWindowsInput: string[];
```

- *Type:* string[]

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeWindows`<sup>Required</sup> <a name="timeWindows" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.timeWindows"></a>

```typescript
public readonly timeWindows: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHoursOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsLaunchSpecSchedulingShutdownHours;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingShutdownHours">OceanAwsLaunchSpecSchedulingShutdownHours</a>

---


### OceanAwsLaunchSpecSchedulingTaskList <a name="OceanAwsLaunchSpecSchedulingTaskList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecSchedulingTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask">OceanAwsLaunchSpecSchedulingTask</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecSchedulingTask[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask">OceanAwsLaunchSpecSchedulingTask</a>[]

---


### OceanAwsLaunchSpecSchedulingTaskOutputReference <a name="OceanAwsLaunchSpecSchedulingTaskOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom">putTaskHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom">resetTaskHeadroom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTaskHeadroom` <a name="putTaskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom"></a>

```typescript
public putTaskHeadroom(value: IResolvable | OceanAwsLaunchSpecSchedulingTaskTaskHeadroom[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.putTaskHeadroom.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom">OceanAwsLaunchSpecSchedulingTaskTaskHeadroom</a>[]

---

##### `resetTaskHeadroom` <a name="resetTaskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.resetTaskHeadroom"></a>

```typescript
public resetTaskHeadroom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom">taskHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList">OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput">cronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput">taskHeadroomInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom">OceanAwsLaunchSpecSchedulingTaskTaskHeadroom</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput">taskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskType">taskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask">OceanAwsLaunchSpecSchedulingTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `taskHeadroom`<sup>Required</sup> <a name="taskHeadroom" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroom"></a>

```typescript
public readonly taskHeadroom: OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList">OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList</a>

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.cronExpressionInput"></a>

```typescript
public readonly cronExpressionInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskHeadroomInput`<sup>Optional</sup> <a name="taskHeadroomInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskHeadroomInput"></a>

```typescript
public readonly taskHeadroomInput: IResolvable | OceanAwsLaunchSpecSchedulingTaskTaskHeadroom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom">OceanAwsLaunchSpecSchedulingTaskTaskHeadroom</a>[]

---

##### `taskTypeInput`<sup>Optional</sup> <a name="taskTypeInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskTypeInput"></a>

```typescript
public readonly taskTypeInput: string;
```

- *Type:* string

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecSchedulingTask;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTask">OceanAwsLaunchSpecSchedulingTask</a>

---


### OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList <a name="OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom">OceanAwsLaunchSpecSchedulingTaskTaskHeadroom</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecSchedulingTaskTaskHeadroom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom">OceanAwsLaunchSpecSchedulingTaskTaskHeadroom</a>[]

---


### OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference <a name="OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetGpuPerUnit">resetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetCpuPerUnit"></a>

```typescript
public resetCpuPerUnit(): void
```

##### `resetGpuPerUnit` <a name="resetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetGpuPerUnit"></a>

```typescript
public resetGpuPerUnit(): void
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.resetMemoryPerUnit"></a>

```typescript
public resetMemoryPerUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnitInput">gpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnit">gpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom">OceanAwsLaunchSpecSchedulingTaskTaskHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnitInput"></a>

```typescript
public readonly cpuPerUnitInput: number;
```

- *Type:* number

---

##### `gpuPerUnitInput`<sup>Optional</sup> <a name="gpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnitInput"></a>

```typescript
public readonly gpuPerUnitInput: number;
```

- *Type:* number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnitInput"></a>

```typescript
public readonly memoryPerUnitInput: number;
```

- *Type:* number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnitsInput"></a>

```typescript
public readonly numOfUnitsInput: number;
```

- *Type:* number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

---

##### `gpuPerUnit`<sup>Required</sup> <a name="gpuPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.gpuPerUnit"></a>

```typescript
public readonly gpuPerUnit: number;
```

- *Type:* number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecSchedulingTaskTaskHeadroom;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecSchedulingTaskTaskHeadroom">OceanAwsLaunchSpecSchedulingTaskTaskHeadroom</a>

---


### OceanAwsLaunchSpecStrategyList <a name="OceanAwsLaunchSpecStrategyList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy">OceanAwsLaunchSpecStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecStrategy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy">OceanAwsLaunchSpecStrategy</a>[]

---


### OceanAwsLaunchSpecStrategyOutputReference <a name="OceanAwsLaunchSpecStrategyOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resetDrainingTimeout">resetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resetSpotPercentage">resetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resetUtilizeCommitments">resetUtilizeCommitments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resetUtilizeReservedInstances">resetUtilizeReservedInstances</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDrainingTimeout` <a name="resetDrainingTimeout" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resetDrainingTimeout"></a>

```typescript
public resetDrainingTimeout(): void
```

##### `resetSpotPercentage` <a name="resetSpotPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resetSpotPercentage"></a>

```typescript
public resetSpotPercentage(): void
```

##### `resetUtilizeCommitments` <a name="resetUtilizeCommitments" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resetUtilizeCommitments"></a>

```typescript
public resetUtilizeCommitments(): void
```

##### `resetUtilizeReservedInstances` <a name="resetUtilizeReservedInstances" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.resetUtilizeReservedInstances"></a>

```typescript
public resetUtilizeReservedInstances(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.drainingTimeoutInput">drainingTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.spotPercentageInput">spotPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.utilizeCommitmentsInput">utilizeCommitmentsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.utilizeReservedInstancesInput">utilizeReservedInstancesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.spotPercentage">spotPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.utilizeCommitments">utilizeCommitments</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.utilizeReservedInstances">utilizeReservedInstances</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy">OceanAwsLaunchSpecStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `drainingTimeoutInput`<sup>Optional</sup> <a name="drainingTimeoutInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.drainingTimeoutInput"></a>

```typescript
public readonly drainingTimeoutInput: number;
```

- *Type:* number

---

##### `spotPercentageInput`<sup>Optional</sup> <a name="spotPercentageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.spotPercentageInput"></a>

```typescript
public readonly spotPercentageInput: number;
```

- *Type:* number

---

##### `utilizeCommitmentsInput`<sup>Optional</sup> <a name="utilizeCommitmentsInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.utilizeCommitmentsInput"></a>

```typescript
public readonly utilizeCommitmentsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `utilizeReservedInstancesInput`<sup>Optional</sup> <a name="utilizeReservedInstancesInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.utilizeReservedInstancesInput"></a>

```typescript
public readonly utilizeReservedInstancesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `drainingTimeout`<sup>Required</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

---

##### `spotPercentage`<sup>Required</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.spotPercentage"></a>

```typescript
public readonly spotPercentage: number;
```

- *Type:* number

---

##### `utilizeCommitments`<sup>Required</sup> <a name="utilizeCommitments" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.utilizeCommitments"></a>

```typescript
public readonly utilizeCommitments: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `utilizeReservedInstances`<sup>Required</sup> <a name="utilizeReservedInstances" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.utilizeReservedInstances"></a>

```typescript
public readonly utilizeReservedInstances: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecStrategy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecStrategy">OceanAwsLaunchSpecStrategy</a>

---


### OceanAwsLaunchSpecTagsList <a name="OceanAwsLaunchSpecTagsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags">OceanAwsLaunchSpecTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags">OceanAwsLaunchSpecTags</a>[]

---


### OceanAwsLaunchSpecTagsOutputReference <a name="OceanAwsLaunchSpecTagsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags">OceanAwsLaunchSpecTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecTags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTags">OceanAwsLaunchSpecTags</a>

---


### OceanAwsLaunchSpecTaintsList <a name="OceanAwsLaunchSpecTaintsList" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.get"></a>

```typescript
public get(index: number): OceanAwsLaunchSpecTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints">OceanAwsLaunchSpecTaints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints">OceanAwsLaunchSpecTaints</a>[]

---


### OceanAwsLaunchSpecTaintsOutputReference <a name="OceanAwsLaunchSpecTaintsOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints">OceanAwsLaunchSpecTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAwsLaunchSpecTaints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecTaints">OceanAwsLaunchSpecTaints</a>

---


### OceanAwsLaunchSpecUpdatePolicyOutputReference <a name="OceanAwsLaunchSpecUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.putRollConfig">putRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resetRollConfig">resetRollConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRollConfig` <a name="putRollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.putRollConfig"></a>

```typescript
public putRollConfig(value: OceanAwsLaunchSpecUpdatePolicyRollConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a>

---

##### `resetRollConfig` <a name="resetRollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.resetRollConfig"></a>

```typescript
public resetRollConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.rollConfig">rollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference">OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.rollConfigInput">rollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.shouldRollInput">shouldRollInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.shouldRoll">shouldRoll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rollConfig`<sup>Required</sup> <a name="rollConfig" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.rollConfig"></a>

```typescript
public readonly rollConfig: OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference">OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference</a>

---

##### `rollConfigInput`<sup>Optional</sup> <a name="rollConfigInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.rollConfigInput"></a>

```typescript
public readonly rollConfigInput: OceanAwsLaunchSpecUpdatePolicyRollConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a>

---

##### `shouldRollInput`<sup>Optional</sup> <a name="shouldRollInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.shouldRollInput"></a>

```typescript
public readonly shouldRollInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldRoll`<sup>Required</sup> <a name="shouldRoll" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.shouldRoll"></a>

```typescript
public readonly shouldRoll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsLaunchSpecUpdatePolicy;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicy">OceanAwsLaunchSpecUpdatePolicy</a>

---


### OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference <a name="OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer"></a>

```typescript
import { oceanAwsLaunchSpec } from '@cdktf/provider-spotinst'

new oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.resetRespectPdb">resetRespectPdb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRespectPdb` <a name="resetRespectPdb" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.resetRespectPdb"></a>

```typescript
public resetRespectPdb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batchSizePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.respectPdbInput">respectPdbInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batchSizePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.respectPdb">respectPdb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchSizePercentageInput`<sup>Optional</sup> <a name="batchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```typescript
public readonly batchSizePercentageInput: number;
```

- *Type:* number

---

##### `respectPdbInput`<sup>Optional</sup> <a name="respectPdbInput" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.respectPdbInput"></a>

```typescript
public readonly respectPdbInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `batchSizePercentage`<sup>Required</sup> <a name="batchSizePercentage" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```typescript
public readonly batchSizePercentage: number;
```

- *Type:* number

---

##### `respectPdb`<sup>Required</sup> <a name="respectPdb" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.respectPdb"></a>

```typescript
public readonly respectPdb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAwsLaunchSpecUpdatePolicyRollConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsLaunchSpec.OceanAwsLaunchSpecUpdatePolicyRollConfig">OceanAwsLaunchSpecUpdatePolicyRollConfig</a>

---



