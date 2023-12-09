# `elastigroupGke` Submodule <a name="`elastigroupGke` Submodule" id="@cdktf/provider-spotinst.elastigroupGke"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupGke <a name="ElastigroupGke" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke spotinst_elastigroup_gke}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGke(scope: Construct, id: string, config: ElastigroupGkeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig">ElastigroupGkeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig">ElastigroupGkeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putBackendServices">putBackendServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putGpu">putGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putInstanceTypesCustom">putInstanceTypesCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationDockerSwarm">putIntegrationDockerSwarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke">putIntegrationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putScalingDownPolicy">putScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putScalingUpPolicy">putScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetBackendServices">resetBackendServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetDrainingTimeout">resetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetFallbackToOndemand">resetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetGpu">resetGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceNamePrefix">resetInstanceNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceTypesCustom">resetInstanceTypesCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceTypesOndemand">resetInstanceTypesOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceTypesPreemptible">resetInstanceTypesPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetIntegrationDockerSwarm">resetIntegrationDockerSwarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetIntegrationGke">resetIntegrationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetIpForwarding">resetIpForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetNodeImage">resetNodeImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetOndemandCount">resetOndemandCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetPreemptiblePercentage">resetPreemptiblePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetProvisioningModel">resetProvisioningModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetScalingDownPolicy">resetScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetScalingUpPolicy">resetScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetShutdownScript">resetShutdownScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetStartupScript">resetStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackendServices` <a name="putBackendServices" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putBackendServices"></a>

```typescript
public putBackendServices(value: IResolvable | ElastigroupGkeBackendServices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putBackendServices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>[]

---

##### `putDisk` <a name="putDisk" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putDisk"></a>

```typescript
public putDisk(value: IResolvable | ElastigroupGkeDisk[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putDisk.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>[]

---

##### `putGpu` <a name="putGpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putGpu"></a>

```typescript
public putGpu(value: IResolvable | ElastigroupGkeGpu[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putGpu.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>[]

---

##### `putInstanceTypesCustom` <a name="putInstanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putInstanceTypesCustom"></a>

```typescript
public putInstanceTypesCustom(value: IResolvable | ElastigroupGkeInstanceTypesCustom[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putInstanceTypesCustom.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>[]

---

##### `putIntegrationDockerSwarm` <a name="putIntegrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationDockerSwarm"></a>

```typescript
public putIntegrationDockerSwarm(value: ElastigroupGkeIntegrationDockerSwarm): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationDockerSwarm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a>

---

##### `putIntegrationGke` <a name="putIntegrationGke" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke"></a>

```typescript
public putIntegrationGke(value: ElastigroupGkeIntegrationGke): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putIntegrationGke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a>

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putLabels"></a>

```typescript
public putLabels(value: IResolvable | ElastigroupGkeLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>[]

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putMetadata"></a>

```typescript
public putMetadata(value: IResolvable | ElastigroupGkeMetadata[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putMetadata.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>[]

---

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putNetworkInterface"></a>

```typescript
public putNetworkInterface(value: IResolvable | ElastigroupGkeNetworkInterface[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putNetworkInterface.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>[]

---

##### `putScalingDownPolicy` <a name="putScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putScalingDownPolicy"></a>

```typescript
public putScalingDownPolicy(value: IResolvable | ElastigroupGkeScalingDownPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putScalingDownPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>[]

---

##### `putScalingUpPolicy` <a name="putScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putScalingUpPolicy"></a>

```typescript
public putScalingUpPolicy(value: IResolvable | ElastigroupGkeScalingUpPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.putScalingUpPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>[]

---

##### `resetBackendServices` <a name="resetBackendServices" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetBackendServices"></a>

```typescript
public resetBackendServices(): void
```

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetDisk` <a name="resetDisk" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetDisk"></a>

```typescript
public resetDisk(): void
```

##### `resetDrainingTimeout` <a name="resetDrainingTimeout" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetDrainingTimeout"></a>

```typescript
public resetDrainingTimeout(): void
```

##### `resetFallbackToOndemand` <a name="resetFallbackToOndemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetFallbackToOndemand"></a>

```typescript
public resetFallbackToOndemand(): void
```

##### `resetGpu` <a name="resetGpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetGpu"></a>

```typescript
public resetGpu(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceNamePrefix` <a name="resetInstanceNamePrefix" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceNamePrefix"></a>

```typescript
public resetInstanceNamePrefix(): void
```

##### `resetInstanceTypesCustom` <a name="resetInstanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceTypesCustom"></a>

```typescript
public resetInstanceTypesCustom(): void
```

##### `resetInstanceTypesOndemand` <a name="resetInstanceTypesOndemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceTypesOndemand"></a>

```typescript
public resetInstanceTypesOndemand(): void
```

##### `resetInstanceTypesPreemptible` <a name="resetInstanceTypesPreemptible" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetInstanceTypesPreemptible"></a>

```typescript
public resetInstanceTypesPreemptible(): void
```

##### `resetIntegrationDockerSwarm` <a name="resetIntegrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetIntegrationDockerSwarm"></a>

```typescript
public resetIntegrationDockerSwarm(): void
```

##### `resetIntegrationGke` <a name="resetIntegrationGke" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetIntegrationGke"></a>

```typescript
public resetIntegrationGke(): void
```

##### `resetIpForwarding` <a name="resetIpForwarding" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetIpForwarding"></a>

```typescript
public resetIpForwarding(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetMaxSize"></a>

```typescript
public resetMaxSize(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetMinSize"></a>

```typescript
public resetMinSize(): void
```

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetNetworkInterface"></a>

```typescript
public resetNetworkInterface(): void
```

##### `resetNodeImage` <a name="resetNodeImage" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetNodeImage"></a>

```typescript
public resetNodeImage(): void
```

##### `resetOndemandCount` <a name="resetOndemandCount" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetOndemandCount"></a>

```typescript
public resetOndemandCount(): void
```

##### `resetPreemptiblePercentage` <a name="resetPreemptiblePercentage" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetPreemptiblePercentage"></a>

```typescript
public resetPreemptiblePercentage(): void
```

##### `resetProvisioningModel` <a name="resetProvisioningModel" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetProvisioningModel"></a>

```typescript
public resetProvisioningModel(): void
```

##### `resetScalingDownPolicy` <a name="resetScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetScalingDownPolicy"></a>

```typescript
public resetScalingDownPolicy(): void
```

##### `resetScalingUpPolicy` <a name="resetScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetScalingUpPolicy"></a>

```typescript
public resetScalingUpPolicy(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetShutdownScript` <a name="resetShutdownScript" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetShutdownScript"></a>

```typescript
public resetShutdownScript(): void
```

##### `resetStartupScript` <a name="resetStartupScript" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetStartupScript"></a>

```typescript
public resetStartupScript(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElastigroupGke resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isConstruct"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

elastigroupGke.ElastigroupGke.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isTerraformElement"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

elastigroupGke.ElastigroupGke.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isTerraformResource"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

elastigroupGke.ElastigroupGke.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.generateConfigForImport"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

elastigroupGke.ElastigroupGke.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ElastigroupGke resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElastigroupGke to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElastigroupGke that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElastigroupGke to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.backendServices">backendServices</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList">ElastigroupGkeBackendServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList">ElastigroupGkeDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.gpu">gpu</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList">ElastigroupGkeGpuList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesCustom">instanceTypesCustom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList">ElastigroupGkeInstanceTypesCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationDockerSwarm">integrationDockerSwarm</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference">ElastigroupGkeIntegrationDockerSwarmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationGke">integrationGke</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference">ElastigroupGkeIntegrationGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList">ElastigroupGkeLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList">ElastigroupGkeMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList">ElastigroupGkeNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingDownPolicy">scalingDownPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList">ElastigroupGkeScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingUpPolicy">scalingUpPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList">ElastigroupGkeScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.backendServicesInput">backendServicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterZoneNameInput">clusterZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.diskInput">diskInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.drainingTimeoutInput">drainingTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.fallbackToOndemandInput">fallbackToOndemandInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.gpuInput">gpuInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceNamePrefixInput">instanceNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesCustomInput">instanceTypesCustomInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesOndemandInput">instanceTypesOndemandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesPreemptibleInput">instanceTypesPreemptibleInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationDockerSwarmInput">integrationDockerSwarmInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationGkeInput">integrationGkeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ipForwardingInput">ipForwardingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.metadataInput">metadataInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.nodeImageInput">nodeImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ondemandCountInput">ondemandCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.preemptiblePercentageInput">preemptiblePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provisioningModelInput">provisioningModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingDownPolicyInput">scalingDownPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingUpPolicyInput">scalingUpPolicyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.shutdownScriptInput">shutdownScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.startupScriptInput">startupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterZoneName">clusterZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceNamePrefix">instanceNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesOndemand">instanceTypesOndemand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesPreemptible">instanceTypesPreemptible</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ipForwarding">ipForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.nodeImage">nodeImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ondemandCount">ondemandCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provisioningModel">provisioningModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.shutdownScript">shutdownScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.startupScript">startupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendServices`<sup>Required</sup> <a name="backendServices" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.backendServices"></a>

```typescript
public readonly backendServices: ElastigroupGkeBackendServicesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList">ElastigroupGkeBackendServicesList</a>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.disk"></a>

```typescript
public readonly disk: ElastigroupGkeDiskList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList">ElastigroupGkeDiskList</a>

---

##### `gpu`<sup>Required</sup> <a name="gpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.gpu"></a>

```typescript
public readonly gpu: ElastigroupGkeGpuList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList">ElastigroupGkeGpuList</a>

---

##### `instanceTypesCustom`<sup>Required</sup> <a name="instanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesCustom"></a>

```typescript
public readonly instanceTypesCustom: ElastigroupGkeInstanceTypesCustomList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList">ElastigroupGkeInstanceTypesCustomList</a>

---

##### `integrationDockerSwarm`<sup>Required</sup> <a name="integrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationDockerSwarm"></a>

```typescript
public readonly integrationDockerSwarm: ElastigroupGkeIntegrationDockerSwarmOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference">ElastigroupGkeIntegrationDockerSwarmOutputReference</a>

---

##### `integrationGke`<sup>Required</sup> <a name="integrationGke" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationGke"></a>

```typescript
public readonly integrationGke: ElastigroupGkeIntegrationGkeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference">ElastigroupGkeIntegrationGkeOutputReference</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.labels"></a>

```typescript
public readonly labels: ElastigroupGkeLabelsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList">ElastigroupGkeLabelsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.metadata"></a>

```typescript
public readonly metadata: ElastigroupGkeMetadataList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList">ElastigroupGkeMetadataList</a>

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.networkInterface"></a>

```typescript
public readonly networkInterface: ElastigroupGkeNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList">ElastigroupGkeNetworkInterfaceList</a>

---

##### `scalingDownPolicy`<sup>Required</sup> <a name="scalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingDownPolicy"></a>

```typescript
public readonly scalingDownPolicy: ElastigroupGkeScalingDownPolicyList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList">ElastigroupGkeScalingDownPolicyList</a>

---

##### `scalingUpPolicy`<sup>Required</sup> <a name="scalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingUpPolicy"></a>

```typescript
public readonly scalingUpPolicy: ElastigroupGkeScalingUpPolicyList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList">ElastigroupGkeScalingUpPolicyList</a>

---

##### `backendServicesInput`<sup>Optional</sup> <a name="backendServicesInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.backendServicesInput"></a>

```typescript
public readonly backendServicesInput: IResolvable | ElastigroupGkeBackendServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>[]

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `clusterZoneNameInput`<sup>Optional</sup> <a name="clusterZoneNameInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterZoneNameInput"></a>

```typescript
public readonly clusterZoneNameInput: string;
```

- *Type:* string

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.desiredCapacityInput"></a>

```typescript
public readonly desiredCapacityInput: number;
```

- *Type:* number

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.diskInput"></a>

```typescript
public readonly diskInput: IResolvable | ElastigroupGkeDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>[]

---

##### `drainingTimeoutInput`<sup>Optional</sup> <a name="drainingTimeoutInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.drainingTimeoutInput"></a>

```typescript
public readonly drainingTimeoutInput: number;
```

- *Type:* number

---

##### `fallbackToOndemandInput`<sup>Optional</sup> <a name="fallbackToOndemandInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.fallbackToOndemandInput"></a>

```typescript
public readonly fallbackToOndemandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gpuInput`<sup>Optional</sup> <a name="gpuInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.gpuInput"></a>

```typescript
public readonly gpuInput: IResolvable | ElastigroupGkeGpu[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceNamePrefixInput`<sup>Optional</sup> <a name="instanceNamePrefixInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceNamePrefixInput"></a>

```typescript
public readonly instanceNamePrefixInput: string;
```

- *Type:* string

---

##### `instanceTypesCustomInput`<sup>Optional</sup> <a name="instanceTypesCustomInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesCustomInput"></a>

```typescript
public readonly instanceTypesCustomInput: IResolvable | ElastigroupGkeInstanceTypesCustom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>[]

---

##### `instanceTypesOndemandInput`<sup>Optional</sup> <a name="instanceTypesOndemandInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesOndemandInput"></a>

```typescript
public readonly instanceTypesOndemandInput: string;
```

- *Type:* string

---

##### `instanceTypesPreemptibleInput`<sup>Optional</sup> <a name="instanceTypesPreemptibleInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesPreemptibleInput"></a>

```typescript
public readonly instanceTypesPreemptibleInput: string[];
```

- *Type:* string[]

---

##### `integrationDockerSwarmInput`<sup>Optional</sup> <a name="integrationDockerSwarmInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationDockerSwarmInput"></a>

```typescript
public readonly integrationDockerSwarmInput: ElastigroupGkeIntegrationDockerSwarm;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a>

---

##### `integrationGkeInput`<sup>Optional</sup> <a name="integrationGkeInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.integrationGkeInput"></a>

```typescript
public readonly integrationGkeInput: ElastigroupGkeIntegrationGke;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a>

---

##### `ipForwardingInput`<sup>Optional</sup> <a name="ipForwardingInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ipForwardingInput"></a>

```typescript
public readonly ipForwardingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | ElastigroupGkeLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>[]

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.metadataInput"></a>

```typescript
public readonly metadataInput: IResolvable | ElastigroupGkeMetadata[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>[]

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.networkInterfaceInput"></a>

```typescript
public readonly networkInterfaceInput: IResolvable | ElastigroupGkeNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>[]

---

##### `nodeImageInput`<sup>Optional</sup> <a name="nodeImageInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.nodeImageInput"></a>

```typescript
public readonly nodeImageInput: string;
```

- *Type:* string

---

##### `ondemandCountInput`<sup>Optional</sup> <a name="ondemandCountInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ondemandCountInput"></a>

```typescript
public readonly ondemandCountInput: number;
```

- *Type:* number

---

##### `preemptiblePercentageInput`<sup>Optional</sup> <a name="preemptiblePercentageInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.preemptiblePercentageInput"></a>

```typescript
public readonly preemptiblePercentageInput: number;
```

- *Type:* number

---

##### `provisioningModelInput`<sup>Optional</sup> <a name="provisioningModelInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provisioningModelInput"></a>

```typescript
public readonly provisioningModelInput: string;
```

- *Type:* string

---

##### `scalingDownPolicyInput`<sup>Optional</sup> <a name="scalingDownPolicyInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingDownPolicyInput"></a>

```typescript
public readonly scalingDownPolicyInput: IResolvable | ElastigroupGkeScalingDownPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>[]

---

##### `scalingUpPolicyInput`<sup>Optional</sup> <a name="scalingUpPolicyInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.scalingUpPolicyInput"></a>

```typescript
public readonly scalingUpPolicyInput: IResolvable | ElastigroupGkeScalingUpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `shutdownScriptInput`<sup>Optional</sup> <a name="shutdownScriptInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.shutdownScriptInput"></a>

```typescript
public readonly shutdownScriptInput: string;
```

- *Type:* string

---

##### `startupScriptInput`<sup>Optional</sup> <a name="startupScriptInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.startupScriptInput"></a>

```typescript
public readonly startupScriptInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `clusterZoneName`<sup>Required</sup> <a name="clusterZoneName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.clusterZoneName"></a>

```typescript
public readonly clusterZoneName: string;
```

- *Type:* string

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

---

##### `drainingTimeout`<sup>Required</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

---

##### `fallbackToOndemand`<sup>Required</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.fallbackToOndemand"></a>

```typescript
public readonly fallbackToOndemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceNamePrefix`<sup>Required</sup> <a name="instanceNamePrefix" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceNamePrefix"></a>

```typescript
public readonly instanceNamePrefix: string;
```

- *Type:* string

---

##### `instanceTypesOndemand`<sup>Required</sup> <a name="instanceTypesOndemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesOndemand"></a>

```typescript
public readonly instanceTypesOndemand: string;
```

- *Type:* string

---

##### `instanceTypesPreemptible`<sup>Required</sup> <a name="instanceTypesPreemptible" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.instanceTypesPreemptible"></a>

```typescript
public readonly instanceTypesPreemptible: string[];
```

- *Type:* string[]

---

##### `ipForwarding`<sup>Required</sup> <a name="ipForwarding" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ipForwarding"></a>

```typescript
public readonly ipForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeImage`<sup>Required</sup> <a name="nodeImage" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.nodeImage"></a>

```typescript
public readonly nodeImage: string;
```

- *Type:* string

---

##### `ondemandCount`<sup>Required</sup> <a name="ondemandCount" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.ondemandCount"></a>

```typescript
public readonly ondemandCount: number;
```

- *Type:* number

---

##### `preemptiblePercentage`<sup>Required</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.preemptiblePercentage"></a>

```typescript
public readonly preemptiblePercentage: number;
```

- *Type:* number

---

##### `provisioningModel`<sup>Required</sup> <a name="provisioningModel" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.provisioningModel"></a>

```typescript
public readonly provisioningModel: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `shutdownScript`<sup>Required</sup> <a name="shutdownScript" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.shutdownScript"></a>

```typescript
public readonly shutdownScript: string;
```

- *Type:* string

---

##### `startupScript`<sup>Required</sup> <a name="startupScript" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.startupScript"></a>

```typescript
public readonly startupScript: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGke.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupGkeBackendServices <a name="ElastigroupGkeBackendServices" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeBackendServices: elastigroupGke.ElastigroupGkeBackendServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#service_name ElastigroupGke#service_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.locationType">locationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#location_type ElastigroupGke#location_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.namedPorts">namedPorts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>[]</code> | named_ports block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#scheme ElastigroupGke#scheme}. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#service_name ElastigroupGke#service_name}.

---

##### `locationType`<sup>Optional</sup> <a name="locationType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.locationType"></a>

```typescript
public readonly locationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#location_type ElastigroupGke#location_type}.

---

##### `namedPorts`<sup>Optional</sup> <a name="namedPorts" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.namedPorts"></a>

```typescript
public readonly namedPorts: IResolvable | ElastigroupGkeBackendServicesNamedPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>[]

named_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#named_ports ElastigroupGke#named_ports}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#scheme ElastigroupGke#scheme}.

---

### ElastigroupGkeBackendServicesNamedPorts <a name="ElastigroupGkeBackendServicesNamedPorts" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeBackendServicesNamedPorts: elastigroupGke.ElastigroupGkeBackendServicesNamedPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts.property.ports">ports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#ports ElastigroupGke#ports}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}.

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#ports ElastigroupGke#ports}.

---

### ElastigroupGkeConfig <a name="ElastigroupGkeConfig" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeConfig: elastigroupGke.ElastigroupGkeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.clusterZoneName">clusterZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#cluster_zone_name ElastigroupGke#cluster_zone_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#desired_capacity ElastigroupGke#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.backendServices">backendServices</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>[]</code> | backend_services block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.disk">disk</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>[]</code> | disk block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.drainingTimeout">drainingTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#draining_timeout ElastigroupGke#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#fallback_to_ondemand ElastigroupGke#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.gpu">gpu</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>[]</code> | gpu block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#id ElastigroupGke#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceNamePrefix">instanceNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#instance_name_prefix ElastigroupGke#instance_name_prefix}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceTypesCustom">instanceTypesCustom</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>[]</code> | instance_types_custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceTypesOndemand">instanceTypesOndemand</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#instance_types_ondemand ElastigroupGke#instance_types_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceTypesPreemptible">instanceTypesPreemptible</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#instance_types_preemptible ElastigroupGke#instance_types_preemptible}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.integrationDockerSwarm">integrationDockerSwarm</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a></code> | integration_docker_swarm block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.integrationGke">integrationGke</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a></code> | integration_gke block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.ipForwarding">ipForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#ip_forwarding ElastigroupGke#ip_forwarding}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.maxSize">maxSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#max_size ElastigroupGke#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.metadata">metadata</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>[]</code> | metadata block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.minSize">minSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#min_size ElastigroupGke#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.networkInterface">networkInterface</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>[]</code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.nodeImage">nodeImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#node_image ElastigroupGke#node_image}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.ondemandCount">ondemandCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#ondemand_count ElastigroupGke#ondemand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.preemptiblePercentage">preemptiblePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#preemptible_percentage ElastigroupGke#preemptible_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.provisioningModel">provisioningModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#provisioning_model ElastigroupGke#provisioning_model}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.scalingDownPolicy">scalingDownPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>[]</code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.scalingUpPolicy">scalingUpPolicy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>[]</code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#service_account ElastigroupGke#service_account}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.shutdownScript">shutdownScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#shutdown_script ElastigroupGke#shutdown_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.startupScript">startupScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#startup_script ElastigroupGke#startup_script}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#tags ElastigroupGke#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterZoneName`<sup>Required</sup> <a name="clusterZoneName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.clusterZoneName"></a>

```typescript
public readonly clusterZoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#cluster_zone_name ElastigroupGke#cluster_zone_name}.

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#desired_capacity ElastigroupGke#desired_capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}.

---

##### `backendServices`<sup>Optional</sup> <a name="backendServices" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.backendServices"></a>

```typescript
public readonly backendServices: IResolvable | ElastigroupGkeBackendServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>[]

backend_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#backend_services ElastigroupGke#backend_services}

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.disk"></a>

```typescript
public readonly disk: IResolvable | ElastigroupGkeDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>[]

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#disk ElastigroupGke#disk}

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.drainingTimeout"></a>

```typescript
public readonly drainingTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#draining_timeout ElastigroupGke#draining_timeout}.

---

##### `fallbackToOndemand`<sup>Optional</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.fallbackToOndemand"></a>

```typescript
public readonly fallbackToOndemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#fallback_to_ondemand ElastigroupGke#fallback_to_ondemand}.

---

##### `gpu`<sup>Optional</sup> <a name="gpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.gpu"></a>

```typescript
public readonly gpu: IResolvable | ElastigroupGkeGpu[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>[]

gpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#gpu ElastigroupGke#gpu}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#id ElastigroupGke#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceNamePrefix`<sup>Optional</sup> <a name="instanceNamePrefix" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceNamePrefix"></a>

```typescript
public readonly instanceNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#instance_name_prefix ElastigroupGke#instance_name_prefix}.

---

##### `instanceTypesCustom`<sup>Optional</sup> <a name="instanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceTypesCustom"></a>

```typescript
public readonly instanceTypesCustom: IResolvable | ElastigroupGkeInstanceTypesCustom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>[]

instance_types_custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#instance_types_custom ElastigroupGke#instance_types_custom}

---

##### `instanceTypesOndemand`<sup>Optional</sup> <a name="instanceTypesOndemand" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceTypesOndemand"></a>

```typescript
public readonly instanceTypesOndemand: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#instance_types_ondemand ElastigroupGke#instance_types_ondemand}.

---

##### `instanceTypesPreemptible`<sup>Optional</sup> <a name="instanceTypesPreemptible" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.instanceTypesPreemptible"></a>

```typescript
public readonly instanceTypesPreemptible: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#instance_types_preemptible ElastigroupGke#instance_types_preemptible}.

---

##### `integrationDockerSwarm`<sup>Optional</sup> <a name="integrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.integrationDockerSwarm"></a>

```typescript
public readonly integrationDockerSwarm: ElastigroupGkeIntegrationDockerSwarm;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a>

integration_docker_swarm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#integration_docker_swarm ElastigroupGke#integration_docker_swarm}

---

##### `integrationGke`<sup>Optional</sup> <a name="integrationGke" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.integrationGke"></a>

```typescript
public readonly integrationGke: ElastigroupGkeIntegrationGke;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a>

integration_gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#integration_gke ElastigroupGke#integration_gke}

---

##### `ipForwarding`<sup>Optional</sup> <a name="ipForwarding" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.ipForwarding"></a>

```typescript
public readonly ipForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#ip_forwarding ElastigroupGke#ip_forwarding}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | ElastigroupGkeLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#labels ElastigroupGke#labels}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#max_size ElastigroupGke#max_size}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.metadata"></a>

```typescript
public readonly metadata: IResolvable | ElastigroupGkeMetadata[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>[]

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#metadata ElastigroupGke#metadata}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#min_size ElastigroupGke#min_size}.

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.networkInterface"></a>

```typescript
public readonly networkInterface: IResolvable | ElastigroupGkeNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>[]

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#network_interface ElastigroupGke#network_interface}

---

##### `nodeImage`<sup>Optional</sup> <a name="nodeImage" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.nodeImage"></a>

```typescript
public readonly nodeImage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#node_image ElastigroupGke#node_image}.

---

##### `ondemandCount`<sup>Optional</sup> <a name="ondemandCount" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.ondemandCount"></a>

```typescript
public readonly ondemandCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#ondemand_count ElastigroupGke#ondemand_count}.

---

##### `preemptiblePercentage`<sup>Optional</sup> <a name="preemptiblePercentage" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.preemptiblePercentage"></a>

```typescript
public readonly preemptiblePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#preemptible_percentage ElastigroupGke#preemptible_percentage}.

---

##### `provisioningModel`<sup>Optional</sup> <a name="provisioningModel" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.provisioningModel"></a>

```typescript
public readonly provisioningModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#provisioning_model ElastigroupGke#provisioning_model}.

---

##### `scalingDownPolicy`<sup>Optional</sup> <a name="scalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.scalingDownPolicy"></a>

```typescript
public readonly scalingDownPolicy: IResolvable | ElastigroupGkeScalingDownPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>[]

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#scaling_down_policy ElastigroupGke#scaling_down_policy}

---

##### `scalingUpPolicy`<sup>Optional</sup> <a name="scalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.scalingUpPolicy"></a>

```typescript
public readonly scalingUpPolicy: IResolvable | ElastigroupGkeScalingUpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>[]

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#scaling_up_policy ElastigroupGke#scaling_up_policy}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#service_account ElastigroupGke#service_account}.

---

##### `shutdownScript`<sup>Optional</sup> <a name="shutdownScript" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.shutdownScript"></a>

```typescript
public readonly shutdownScript: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#shutdown_script ElastigroupGke#shutdown_script}.

---

##### `startupScript`<sup>Optional</sup> <a name="startupScript" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.startupScript"></a>

```typescript
public readonly startupScript: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#startup_script ElastigroupGke#startup_script}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#tags ElastigroupGke#tags}.

---

### ElastigroupGkeDisk <a name="ElastigroupGkeDisk" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeDisk: elastigroupGke.ElastigroupGkeDisk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.autoDelete">autoDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#auto_delete ElastigroupGke#auto_delete}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.boot">boot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#boot ElastigroupGke#boot}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.deviceName">deviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#device_name ElastigroupGke#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.initializeParams">initializeParams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>[]</code> | initialize_params block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.interface">interface</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#interface ElastigroupGke#interface}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#mode ElastigroupGke#mode}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#source ElastigroupGke#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#type ElastigroupGke#type}. |

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.autoDelete"></a>

```typescript
public readonly autoDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#auto_delete ElastigroupGke#auto_delete}.

---

##### `boot`<sup>Optional</sup> <a name="boot" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.boot"></a>

```typescript
public readonly boot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#boot ElastigroupGke#boot}.

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#device_name ElastigroupGke#device_name}.

---

##### `initializeParams`<sup>Optional</sup> <a name="initializeParams" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.initializeParams"></a>

```typescript
public readonly initializeParams: IResolvable | ElastigroupGkeDiskInitializeParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>[]

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#initialize_params ElastigroupGke#initialize_params}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#interface ElastigroupGke#interface}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#mode ElastigroupGke#mode}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#source ElastigroupGke#source}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#type ElastigroupGke#type}.

---

### ElastigroupGkeDiskInitializeParams <a name="ElastigroupGkeDiskInitializeParams" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeDiskInitializeParams: elastigroupGke.ElastigroupGkeDiskInitializeParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.property.sourceImage">sourceImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#source_image ElastigroupGke#source_image}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#disk_size_gb ElastigroupGke#disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.property.diskType">diskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#disk_type ElastigroupGke#disk_type}. |

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.property.sourceImage"></a>

```typescript
public readonly sourceImage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#source_image ElastigroupGke#source_image}.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#disk_size_gb ElastigroupGke#disk_size_gb}.

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#disk_type ElastigroupGke#disk_type}.

---

### ElastigroupGkeGpu <a name="ElastigroupGkeGpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeGpu: elastigroupGke.ElastigroupGkeGpu = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#count ElastigroupGke#count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#type ElastigroupGke#type}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#count ElastigroupGke#count}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#type ElastigroupGke#type}.

---

### ElastigroupGkeInstanceTypesCustom <a name="ElastigroupGkeInstanceTypesCustom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeInstanceTypesCustom: elastigroupGke.ElastigroupGkeInstanceTypesCustom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom.property.memoryGib">memoryGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#memory_gib ElastigroupGke#memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom.property.vcpu">vcpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#vcpu ElastigroupGke#vcpu}. |

---

##### `memoryGib`<sup>Required</sup> <a name="memoryGib" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom.property.memoryGib"></a>

```typescript
public readonly memoryGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#memory_gib ElastigroupGke#memory_gib}.

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom.property.vcpu"></a>

```typescript
public readonly vcpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#vcpu ElastigroupGke#vcpu}.

---

### ElastigroupGkeIntegrationDockerSwarm <a name="ElastigroupGkeIntegrationDockerSwarm" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeIntegrationDockerSwarm: elastigroupGke.ElastigroupGkeIntegrationDockerSwarm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm.property.masterHost">masterHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#master_host ElastigroupGke#master_host}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm.property.masterPort">masterPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#master_port ElastigroupGke#master_port}. |

---

##### `masterHost`<sup>Required</sup> <a name="masterHost" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm.property.masterHost"></a>

```typescript
public readonly masterHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#master_host ElastigroupGke#master_host}.

---

##### `masterPort`<sup>Required</sup> <a name="masterPort" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm.property.masterPort"></a>

```typescript
public readonly masterPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#master_port ElastigroupGke#master_port}.

---

### ElastigroupGkeIntegrationGke <a name="ElastigroupGkeIntegrationGke" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeIntegrationGke: elastigroupGke.ElastigroupGkeIntegrationGke = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleCooldown">autoscaleCooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#autoscale_cooldown ElastigroupGke#autoscale_cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleIsAutoConfig">autoscaleIsAutoConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#autoscale_is_auto_config ElastigroupGke#autoscale_is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#autoscale_is_enabled ElastigroupGke#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleLabels">autoscaleLabels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>[]</code> | autoscale_labels block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoUpdate">autoUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#auto_update ElastigroupGke#auto_update}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#location ElastigroupGke#location}. |

---

##### `autoscaleCooldown`<sup>Optional</sup> <a name="autoscaleCooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleCooldown"></a>

```typescript
public readonly autoscaleCooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#autoscale_cooldown ElastigroupGke#autoscale_cooldown}.

---

##### `autoscaleDown`<sup>Optional</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleDown"></a>

```typescript
public readonly autoscaleDown: ElastigroupGkeIntegrationGkeAutoscaleDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#autoscale_down ElastigroupGke#autoscale_down}

---

##### `autoscaleHeadroom`<sup>Optional</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleHeadroom"></a>

```typescript
public readonly autoscaleHeadroom: ElastigroupGkeIntegrationGkeAutoscaleHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#autoscale_headroom ElastigroupGke#autoscale_headroom}

---

##### `autoscaleIsAutoConfig`<sup>Optional</sup> <a name="autoscaleIsAutoConfig" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleIsAutoConfig"></a>

```typescript
public readonly autoscaleIsAutoConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#autoscale_is_auto_config ElastigroupGke#autoscale_is_auto_config}.

---

##### `autoscaleIsEnabled`<sup>Optional</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleIsEnabled"></a>

```typescript
public readonly autoscaleIsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#autoscale_is_enabled ElastigroupGke#autoscale_is_enabled}.

---

##### `autoscaleLabels`<sup>Optional</sup> <a name="autoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoscaleLabels"></a>

```typescript
public readonly autoscaleLabels: IResolvable | ElastigroupGkeIntegrationGkeAutoscaleLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>[]

autoscale_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#autoscale_labels ElastigroupGke#autoscale_labels}

---

##### `autoUpdate`<sup>Optional</sup> <a name="autoUpdate" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.autoUpdate"></a>

```typescript
public readonly autoUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#auto_update ElastigroupGke#auto_update}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#cluster_id ElastigroupGke#cluster_id}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#location ElastigroupGke#location}.

---

### ElastigroupGkeIntegrationGkeAutoscaleDown <a name="ElastigroupGkeIntegrationGkeAutoscaleDown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeIntegrationGkeAutoscaleDown: elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}. |

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}.

---

### ElastigroupGkeIntegrationGkeAutoscaleHeadroom <a name="ElastigroupGkeIntegrationGkeAutoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeIntegrationGkeAutoscaleHeadroom: elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#cpu_per_unit ElastigroupGke#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#memory_per_unit ElastigroupGke#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#num_of_units ElastigroupGke#num_of_units}. |

---

##### `cpuPerUnit`<sup>Optional</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#cpu_per_unit ElastigroupGke#cpu_per_unit}.

---

##### `memoryPerUnit`<sup>Optional</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#memory_per_unit ElastigroupGke#memory_per_unit}.

---

##### `numOfUnits`<sup>Optional</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#num_of_units ElastigroupGke#num_of_units}.

---

### ElastigroupGkeIntegrationGkeAutoscaleLabels <a name="ElastigroupGkeIntegrationGkeAutoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeIntegrationGkeAutoscaleLabels: elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#key ElastigroupGke#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#key ElastigroupGke#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}.

---

### ElastigroupGkeLabels <a name="ElastigroupGkeLabels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeLabels: elastigroupGke.ElastigroupGkeLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#key ElastigroupGke#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#key ElastigroupGke#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}.

---

### ElastigroupGkeMetadata <a name="ElastigroupGkeMetadata" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeMetadata: elastigroupGke.ElastigroupGkeMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#key ElastigroupGke#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#key ElastigroupGke#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}.

---

### ElastigroupGkeNetworkInterface <a name="ElastigroupGkeNetworkInterface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeNetworkInterface: elastigroupGke.ElastigroupGkeNetworkInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.property.network">network</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#network ElastigroupGke#network}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.property.accessConfigs">accessConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>[]</code> | access_configs block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.property.aliasIpRanges">aliasIpRanges</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>[]</code> | alias_ip_ranges block. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#network ElastigroupGke#network}.

---

##### `accessConfigs`<sup>Optional</sup> <a name="accessConfigs" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.property.accessConfigs"></a>

```typescript
public readonly accessConfigs: IResolvable | ElastigroupGkeNetworkInterfaceAccessConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>[]

access_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#access_configs ElastigroupGke#access_configs}

---

##### `aliasIpRanges`<sup>Optional</sup> <a name="aliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface.property.aliasIpRanges"></a>

```typescript
public readonly aliasIpRanges: IResolvable | ElastigroupGkeNetworkInterfaceAliasIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>[]

alias_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#alias_ip_ranges ElastigroupGke#alias_ip_ranges}

---

### ElastigroupGkeNetworkInterfaceAccessConfigs <a name="ElastigroupGkeNetworkInterfaceAccessConfigs" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeNetworkInterfaceAccessConfigs: elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#type ElastigroupGke#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#type ElastigroupGke#type}.

---

### ElastigroupGkeNetworkInterfaceAliasIpRanges <a name="ElastigroupGkeNetworkInterfaceAliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeNetworkInterfaceAliasIpRanges: elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#ip_cidr_range ElastigroupGke#ip_cidr_range}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#subnetwork_range_name ElastigroupGke#subnetwork_range_name}. |

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#ip_cidr_range ElastigroupGke#ip_cidr_range}.

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges.property.subnetworkRangeName"></a>

```typescript
public readonly subnetworkRangeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#subnetwork_range_name ElastigroupGke#subnetwork_range_name}.

---

### ElastigroupGkeScalingDownPolicy <a name="ElastigroupGkeScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeScalingDownPolicy: elastigroupGke.ElastigroupGkeScalingDownPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#metric_name ElastigroupGke#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#namespace ElastigroupGke#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#policy_name ElastigroupGke#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#threshold ElastigroupGke#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#unit ElastigroupGke#unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#action_type ElastigroupGke#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.adjustment">adjustment</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#adjustment ElastigroupGke#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.cooldown">cooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#cooldown ElastigroupGke#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>[]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#operator ElastigroupGke#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#period ElastigroupGke#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#source ElastigroupGke#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#statistic ElastigroupGke#statistic}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#metric_name ElastigroupGke#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#namespace ElastigroupGke#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#policy_name ElastigroupGke#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#threshold ElastigroupGke#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#unit ElastigroupGke#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#action_type ElastigroupGke#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.adjustment"></a>

```typescript
public readonly adjustment: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#adjustment ElastigroupGke#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#cooldown ElastigroupGke#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | ElastigroupGkeScalingDownPolicyDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>[]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#dimensions ElastigroupGke#dimensions}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#operator ElastigroupGke#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#period ElastigroupGke#period}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#source ElastigroupGke#source}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#statistic ElastigroupGke#statistic}.

---

### ElastigroupGkeScalingDownPolicyDimensions <a name="ElastigroupGkeScalingDownPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeScalingDownPolicyDimensions: elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}.

---

### ElastigroupGkeScalingUpPolicy <a name="ElastigroupGkeScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeScalingUpPolicy: elastigroupGke.ElastigroupGkeScalingUpPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#metric_name ElastigroupGke#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#namespace ElastigroupGke#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#policy_name ElastigroupGke#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#threshold ElastigroupGke#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#unit ElastigroupGke#unit}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#action_type ElastigroupGke#action_type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.adjustment">adjustment</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#adjustment ElastigroupGke#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.cooldown">cooldown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#cooldown ElastigroupGke#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>[]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#operator ElastigroupGke#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#period ElastigroupGke#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#source ElastigroupGke#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#statistic ElastigroupGke#statistic}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#metric_name ElastigroupGke#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#namespace ElastigroupGke#namespace}.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#policy_name ElastigroupGke#policy_name}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#threshold ElastigroupGke#threshold}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#unit ElastigroupGke#unit}.

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#action_type ElastigroupGke#action_type}.

---

##### `adjustment`<sup>Optional</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.adjustment"></a>

```typescript
public readonly adjustment: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#adjustment ElastigroupGke#adjustment}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#cooldown ElastigroupGke#cooldown}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | ElastigroupGkeScalingUpPolicyDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>[]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#dimensions ElastigroupGke#dimensions}

---

##### `evaluationPeriods`<sup>Optional</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#evaluation_periods ElastigroupGke#evaluation_periods}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#operator ElastigroupGke#operator}.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#period ElastigroupGke#period}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#source ElastigroupGke#source}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#statistic ElastigroupGke#statistic}.

---

### ElastigroupGkeScalingUpPolicyDimensions <a name="ElastigroupGkeScalingUpPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

const elastigroupGkeScalingUpPolicyDimensions: elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#name ElastigroupGke#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.153.0/docs/resources/elastigroup_gke#value ElastigroupGke#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupGkeBackendServicesList <a name="ElastigroupGkeBackendServicesList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeBackendServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.get"></a>

```typescript
public get(index: number): ElastigroupGkeBackendServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeBackendServices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>[]

---


### ElastigroupGkeBackendServicesNamedPortsList <a name="ElastigroupGkeBackendServicesNamedPortsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.get"></a>

```typescript
public get(index: number): ElastigroupGkeBackendServicesNamedPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeBackendServicesNamedPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>[]

---


### ElastigroupGkeBackendServicesNamedPortsOutputReference <a name="ElastigroupGkeBackendServicesNamedPortsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.portsInput">portsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeBackendServicesNamedPorts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>

---


### ElastigroupGkeBackendServicesOutputReference <a name="ElastigroupGkeBackendServicesOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeBackendServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.putNamedPorts">putNamedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resetLocationType">resetLocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resetNamedPorts">resetNamedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamedPorts` <a name="putNamedPorts" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.putNamedPorts"></a>

```typescript
public putNamedPorts(value: IResolvable | ElastigroupGkeBackendServicesNamedPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.putNamedPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>[]

---

##### `resetLocationType` <a name="resetLocationType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resetLocationType"></a>

```typescript
public resetLocationType(): void
```

##### `resetNamedPorts` <a name="resetNamedPorts" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resetNamedPorts"></a>

```typescript
public resetNamedPorts(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.namedPorts">namedPorts</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList">ElastigroupGkeBackendServicesNamedPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.locationTypeInput">locationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.namedPortsInput">namedPortsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.locationType">locationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namedPorts`<sup>Required</sup> <a name="namedPorts" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.namedPorts"></a>

```typescript
public readonly namedPorts: ElastigroupGkeBackendServicesNamedPortsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPortsList">ElastigroupGkeBackendServicesNamedPortsList</a>

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.locationTypeInput"></a>

```typescript
public readonly locationTypeInput: string;
```

- *Type:* string

---

##### `namedPortsInput`<sup>Optional</sup> <a name="namedPortsInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.namedPortsInput"></a>

```typescript
public readonly namedPortsInput: IResolvable | ElastigroupGkeBackendServicesNamedPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesNamedPorts">ElastigroupGkeBackendServicesNamedPorts</a>[]

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.locationType"></a>

```typescript
public readonly locationType: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeBackendServices;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeBackendServices">ElastigroupGkeBackendServices</a>

---


### ElastigroupGkeDiskInitializeParamsList <a name="ElastigroupGkeDiskInitializeParamsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeDiskInitializeParamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.get"></a>

```typescript
public get(index: number): ElastigroupGkeDiskInitializeParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeDiskInitializeParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>[]

---


### ElastigroupGkeDiskInitializeParamsOutputReference <a name="ElastigroupGkeDiskInitializeParamsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.resetDiskType"></a>

```typescript
public resetDiskType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.sourceImageInput">sourceImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.sourceImage">sourceImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: string;
```

- *Type:* string

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `sourceImageInput`<sup>Optional</sup> <a name="sourceImageInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.sourceImageInput"></a>

```typescript
public readonly sourceImageInput: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `sourceImage`<sup>Required</sup> <a name="sourceImage" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.sourceImage"></a>

```typescript
public readonly sourceImage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeDiskInitializeParams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>

---


### ElastigroupGkeDiskList <a name="ElastigroupGkeDiskList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.get"></a>

```typescript
public get(index: number): ElastigroupGkeDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeDisk[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>[]

---


### ElastigroupGkeDiskOutputReference <a name="ElastigroupGkeDiskOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.putInitializeParams">putInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetBoot">resetBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetInitializeParams">resetInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetInterface">resetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInitializeParams` <a name="putInitializeParams" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.putInitializeParams"></a>

```typescript
public putInitializeParams(value: IResolvable | ElastigroupGkeDiskInitializeParams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.putInitializeParams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>[]

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetAutoDelete"></a>

```typescript
public resetAutoDelete(): void
```

##### `resetBoot` <a name="resetBoot" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetBoot"></a>

```typescript
public resetBoot(): void
```

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetDeviceName"></a>

```typescript
public resetDeviceName(): void
```

##### `resetInitializeParams` <a name="resetInitializeParams" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetInitializeParams"></a>

```typescript
public resetInitializeParams(): void
```

##### `resetInterface` <a name="resetInterface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetInterface"></a>

```typescript
public resetInterface(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.initializeParams">initializeParams</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList">ElastigroupGkeDiskInitializeParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.bootInput">bootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.initializeParamsInput">initializeParamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.autoDelete">autoDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.boot">boot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.interface">interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initializeParams`<sup>Required</sup> <a name="initializeParams" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.initializeParams"></a>

```typescript
public readonly initializeParams: ElastigroupGkeDiskInitializeParamsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParamsList">ElastigroupGkeDiskInitializeParamsList</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.autoDeleteInput"></a>

```typescript
public readonly autoDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bootInput`<sup>Optional</sup> <a name="bootInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.bootInput"></a>

```typescript
public readonly bootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.deviceNameInput"></a>

```typescript
public readonly deviceNameInput: string;
```

- *Type:* string

---

##### `initializeParamsInput`<sup>Optional</sup> <a name="initializeParamsInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.initializeParamsInput"></a>

```typescript
public readonly initializeParamsInput: IResolvable | ElastigroupGkeDiskInitializeParams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskInitializeParams">ElastigroupGkeDiskInitializeParams</a>[]

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.autoDelete"></a>

```typescript
public readonly autoDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `boot`<sup>Required</sup> <a name="boot" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.boot"></a>

```typescript
public readonly boot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.interface"></a>

```typescript
public readonly interface: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeDisk;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeDisk">ElastigroupGkeDisk</a>

---


### ElastigroupGkeGpuList <a name="ElastigroupGkeGpuList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeGpuList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.get"></a>

```typescript
public get(index: number): ElastigroupGkeGpuOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeGpu[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>[]

---


### ElastigroupGkeGpuOutputReference <a name="ElastigroupGkeGpuOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeGpuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeGpu;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeGpu">ElastigroupGkeGpu</a>

---


### ElastigroupGkeInstanceTypesCustomList <a name="ElastigroupGkeInstanceTypesCustomList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeInstanceTypesCustomList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.get"></a>

```typescript
public get(index: number): ElastigroupGkeInstanceTypesCustomOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeInstanceTypesCustom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>[]

---


### ElastigroupGkeInstanceTypesCustomOutputReference <a name="ElastigroupGkeInstanceTypesCustomOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.memoryGibInput">memoryGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.vcpuInput">vcpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.memoryGib">memoryGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.vcpu">vcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryGibInput`<sup>Optional</sup> <a name="memoryGibInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.memoryGibInput"></a>

```typescript
public readonly memoryGibInput: number;
```

- *Type:* number

---

##### `vcpuInput`<sup>Optional</sup> <a name="vcpuInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.vcpuInput"></a>

```typescript
public readonly vcpuInput: number;
```

- *Type:* number

---

##### `memoryGib`<sup>Required</sup> <a name="memoryGib" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.memoryGib"></a>

```typescript
public readonly memoryGib: number;
```

- *Type:* number

---

##### `vcpu`<sup>Required</sup> <a name="vcpu" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.vcpu"></a>

```typescript
public readonly vcpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeInstanceTypesCustom;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeInstanceTypesCustom">ElastigroupGkeInstanceTypesCustom</a>

---


### ElastigroupGkeIntegrationDockerSwarmOutputReference <a name="ElastigroupGkeIntegrationDockerSwarmOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterHostInput">masterHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterPortInput">masterPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterHost">masterHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterPort">masterPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `masterHostInput`<sup>Optional</sup> <a name="masterHostInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterHostInput"></a>

```typescript
public readonly masterHostInput: string;
```

- *Type:* string

---

##### `masterPortInput`<sup>Optional</sup> <a name="masterPortInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterPortInput"></a>

```typescript
public readonly masterPortInput: number;
```

- *Type:* number

---

##### `masterHost`<sup>Required</sup> <a name="masterHost" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterHost"></a>

```typescript
public readonly masterHost: string;
```

- *Type:* string

---

##### `masterPort`<sup>Required</sup> <a name="masterPort" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.masterPort"></a>

```typescript
public readonly masterPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGkeIntegrationDockerSwarm;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationDockerSwarm">ElastigroupGkeIntegrationDockerSwarm</a>

---


### ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference <a name="ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGkeIntegrationGkeAutoscaleDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a>

---


### ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference <a name="ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resetCpuPerUnit">resetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resetMemoryPerUnit">resetMemoryPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resetNumOfUnits">resetNumOfUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPerUnit` <a name="resetCpuPerUnit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resetCpuPerUnit"></a>

```typescript
public resetCpuPerUnit(): void
```

##### `resetMemoryPerUnit` <a name="resetMemoryPerUnit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resetMemoryPerUnit"></a>

```typescript
public resetMemoryPerUnit(): void
```

##### `resetNumOfUnits` <a name="resetNumOfUnits" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.resetNumOfUnits"></a>

```typescript
public resetNumOfUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnitInput">cpuPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnitInput">memoryPerUnitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnitsInput">numOfUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnit">cpuPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnit">memoryPerUnit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnits">numOfUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuPerUnitInput`<sup>Optional</sup> <a name="cpuPerUnitInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnitInput"></a>

```typescript
public readonly cpuPerUnitInput: number;
```

- *Type:* number

---

##### `memoryPerUnitInput`<sup>Optional</sup> <a name="memoryPerUnitInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnitInput"></a>

```typescript
public readonly memoryPerUnitInput: number;
```

- *Type:* number

---

##### `numOfUnitsInput`<sup>Optional</sup> <a name="numOfUnitsInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnitsInput"></a>

```typescript
public readonly numOfUnitsInput: number;
```

- *Type:* number

---

##### `cpuPerUnit`<sup>Required</sup> <a name="cpuPerUnit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.cpuPerUnit"></a>

```typescript
public readonly cpuPerUnit: number;
```

- *Type:* number

---

##### `memoryPerUnit`<sup>Required</sup> <a name="memoryPerUnit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.memoryPerUnit"></a>

```typescript
public readonly memoryPerUnit: number;
```

- *Type:* number

---

##### `numOfUnits`<sup>Required</sup> <a name="numOfUnits" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.numOfUnits"></a>

```typescript
public readonly numOfUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGkeIntegrationGkeAutoscaleHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a>

---


### ElastigroupGkeIntegrationGkeAutoscaleLabelsList <a name="ElastigroupGkeIntegrationGkeAutoscaleLabelsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.get"></a>

```typescript
public get(index: number): ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeIntegrationGkeAutoscaleLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>[]

---


### ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference <a name="ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeIntegrationGkeAutoscaleLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>

---


### ElastigroupGkeIntegrationGkeOutputReference <a name="ElastigroupGkeIntegrationGkeOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleDown">putAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleHeadroom">putAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleLabels">putAutoscaleLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleCooldown">resetAutoscaleCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleDown">resetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleHeadroom">resetAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleIsAutoConfig">resetAutoscaleIsAutoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleIsEnabled">resetAutoscaleIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleLabels">resetAutoscaleLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoUpdate">resetAutoUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetLocation">resetLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscaleDown` <a name="putAutoscaleDown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleDown"></a>

```typescript
public putAutoscaleDown(value: ElastigroupGkeIntegrationGkeAutoscaleDown): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a>

---

##### `putAutoscaleHeadroom` <a name="putAutoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleHeadroom"></a>

```typescript
public putAutoscaleHeadroom(value: ElastigroupGkeIntegrationGkeAutoscaleHeadroom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a>

---

##### `putAutoscaleLabels` <a name="putAutoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleLabels"></a>

```typescript
public putAutoscaleLabels(value: IResolvable | ElastigroupGkeIntegrationGkeAutoscaleLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.putAutoscaleLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>[]

---

##### `resetAutoscaleCooldown` <a name="resetAutoscaleCooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleCooldown"></a>

```typescript
public resetAutoscaleCooldown(): void
```

##### `resetAutoscaleDown` <a name="resetAutoscaleDown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleDown"></a>

```typescript
public resetAutoscaleDown(): void
```

##### `resetAutoscaleHeadroom` <a name="resetAutoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleHeadroom"></a>

```typescript
public resetAutoscaleHeadroom(): void
```

##### `resetAutoscaleIsAutoConfig` <a name="resetAutoscaleIsAutoConfig" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleIsAutoConfig"></a>

```typescript
public resetAutoscaleIsAutoConfig(): void
```

##### `resetAutoscaleIsEnabled` <a name="resetAutoscaleIsEnabled" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleIsEnabled"></a>

```typescript
public resetAutoscaleIsEnabled(): void
```

##### `resetAutoscaleLabels` <a name="resetAutoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoscaleLabels"></a>

```typescript
public resetAutoscaleLabels(): void
```

##### `resetAutoUpdate` <a name="resetAutoUpdate" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetAutoUpdate"></a>

```typescript
public resetAutoUpdate(): void
```

##### `resetClusterId` <a name="resetClusterId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference">ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference">ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleLabels">autoscaleLabels</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList">ElastigroupGkeIntegrationGkeAutoscaleLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleCooldownInput">autoscaleCooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleDownInput">autoscaleDownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleHeadroomInput">autoscaleHeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsAutoConfigInput">autoscaleIsAutoConfigInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsEnabledInput">autoscaleIsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleLabelsInput">autoscaleLabelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoUpdateInput">autoUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleCooldown">autoscaleCooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsAutoConfig">autoscaleIsAutoConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoUpdate">autoUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscaleDown`<sup>Required</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleDown"></a>

```typescript
public readonly autoscaleDown: ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference">ElastigroupGkeIntegrationGkeAutoscaleDownOutputReference</a>

---

##### `autoscaleHeadroom`<sup>Required</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleHeadroom"></a>

```typescript
public readonly autoscaleHeadroom: ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference">ElastigroupGkeIntegrationGkeAutoscaleHeadroomOutputReference</a>

---

##### `autoscaleLabels`<sup>Required</sup> <a name="autoscaleLabels" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleLabels"></a>

```typescript
public readonly autoscaleLabels: ElastigroupGkeIntegrationGkeAutoscaleLabelsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabelsList">ElastigroupGkeIntegrationGkeAutoscaleLabelsList</a>

---

##### `autoscaleCooldownInput`<sup>Optional</sup> <a name="autoscaleCooldownInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleCooldownInput"></a>

```typescript
public readonly autoscaleCooldownInput: number;
```

- *Type:* number

---

##### `autoscaleDownInput`<sup>Optional</sup> <a name="autoscaleDownInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleDownInput"></a>

```typescript
public readonly autoscaleDownInput: ElastigroupGkeIntegrationGkeAutoscaleDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleDown">ElastigroupGkeIntegrationGkeAutoscaleDown</a>

---

##### `autoscaleHeadroomInput`<sup>Optional</sup> <a name="autoscaleHeadroomInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleHeadroomInput"></a>

```typescript
public readonly autoscaleHeadroomInput: ElastigroupGkeIntegrationGkeAutoscaleHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleHeadroom">ElastigroupGkeIntegrationGkeAutoscaleHeadroom</a>

---

##### `autoscaleIsAutoConfigInput`<sup>Optional</sup> <a name="autoscaleIsAutoConfigInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsAutoConfigInput"></a>

```typescript
public readonly autoscaleIsAutoConfigInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoscaleIsEnabledInput`<sup>Optional</sup> <a name="autoscaleIsEnabledInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsEnabledInput"></a>

```typescript
public readonly autoscaleIsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoscaleLabelsInput`<sup>Optional</sup> <a name="autoscaleLabelsInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleLabelsInput"></a>

```typescript
public readonly autoscaleLabelsInput: IResolvable | ElastigroupGkeIntegrationGkeAutoscaleLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeAutoscaleLabels">ElastigroupGkeIntegrationGkeAutoscaleLabels</a>[]

---

##### `autoUpdateInput`<sup>Optional</sup> <a name="autoUpdateInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoUpdateInput"></a>

```typescript
public readonly autoUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `autoscaleCooldown`<sup>Required</sup> <a name="autoscaleCooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleCooldown"></a>

```typescript
public readonly autoscaleCooldown: number;
```

- *Type:* number

---

##### `autoscaleIsAutoConfig`<sup>Required</sup> <a name="autoscaleIsAutoConfig" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsAutoConfig"></a>

```typescript
public readonly autoscaleIsAutoConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoscaleIsEnabled`<sup>Required</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoscaleIsEnabled"></a>

```typescript
public readonly autoscaleIsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoUpdate`<sup>Required</sup> <a name="autoUpdate" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.autoUpdate"></a>

```typescript
public readonly autoUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGkeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastigroupGkeIntegrationGke;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeIntegrationGke">ElastigroupGkeIntegrationGke</a>

---


### ElastigroupGkeLabelsList <a name="ElastigroupGkeLabelsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.get"></a>

```typescript
public get(index: number): ElastigroupGkeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>[]

---


### ElastigroupGkeLabelsOutputReference <a name="ElastigroupGkeLabelsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeLabels">ElastigroupGkeLabels</a>

---


### ElastigroupGkeMetadataList <a name="ElastigroupGkeMetadataList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.get"></a>

```typescript
public get(index: number): ElastigroupGkeMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeMetadata[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>[]

---


### ElastigroupGkeMetadataOutputReference <a name="ElastigroupGkeMetadataOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeMetadata;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeMetadata">ElastigroupGkeMetadata</a>

---


### ElastigroupGkeNetworkInterfaceAccessConfigsList <a name="ElastigroupGkeNetworkInterfaceAccessConfigsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.get"></a>

```typescript
public get(index: number): ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeNetworkInterfaceAccessConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>[]

---


### ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference <a name="ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeNetworkInterfaceAccessConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>

---


### ElastigroupGkeNetworkInterfaceAliasIpRangesList <a name="ElastigroupGkeNetworkInterfaceAliasIpRangesList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.get"></a>

```typescript
public get(index: number): ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeNetworkInterfaceAliasIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>[]

---


### ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference <a name="ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeNameInput">subnetworkRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeName">subnetworkRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRangeInput"></a>

```typescript
public readonly ipCidrRangeInput: string;
```

- *Type:* string

---

##### `subnetworkRangeNameInput`<sup>Optional</sup> <a name="subnetworkRangeNameInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeNameInput"></a>

```typescript
public readonly subnetworkRangeNameInput: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `subnetworkRangeName`<sup>Required</sup> <a name="subnetworkRangeName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.subnetworkRangeName"></a>

```typescript
public readonly subnetworkRangeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeNetworkInterfaceAliasIpRanges;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>

---


### ElastigroupGkeNetworkInterfaceList <a name="ElastigroupGkeNetworkInterfaceList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.get"></a>

```typescript
public get(index: number): ElastigroupGkeNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeNetworkInterface[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>[]

---


### ElastigroupGkeNetworkInterfaceOutputReference <a name="ElastigroupGkeNetworkInterfaceOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.putAccessConfigs">putAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.putAliasIpRanges">putAliasIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resetAccessConfigs">resetAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resetAliasIpRanges">resetAliasIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfigs` <a name="putAccessConfigs" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.putAccessConfigs"></a>

```typescript
public putAccessConfigs(value: IResolvable | ElastigroupGkeNetworkInterfaceAccessConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>[]

---

##### `putAliasIpRanges` <a name="putAliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.putAliasIpRanges"></a>

```typescript
public putAliasIpRanges(value: IResolvable | ElastigroupGkeNetworkInterfaceAliasIpRanges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.putAliasIpRanges.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>[]

---

##### `resetAccessConfigs` <a name="resetAccessConfigs" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resetAccessConfigs"></a>

```typescript
public resetAccessConfigs(): void
```

##### `resetAliasIpRanges` <a name="resetAliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.resetAliasIpRanges"></a>

```typescript
public resetAliasIpRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.accessConfigs">accessConfigs</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList">ElastigroupGkeNetworkInterfaceAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.aliasIpRanges">aliasIpRanges</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList">ElastigroupGkeNetworkInterfaceAliasIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.accessConfigsInput">accessConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.aliasIpRangesInput">aliasIpRangesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessConfigs`<sup>Required</sup> <a name="accessConfigs" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.accessConfigs"></a>

```typescript
public readonly accessConfigs: ElastigroupGkeNetworkInterfaceAccessConfigsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigsList">ElastigroupGkeNetworkInterfaceAccessConfigsList</a>

---

##### `aliasIpRanges`<sup>Required</sup> <a name="aliasIpRanges" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.aliasIpRanges"></a>

```typescript
public readonly aliasIpRanges: ElastigroupGkeNetworkInterfaceAliasIpRangesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRangesList">ElastigroupGkeNetworkInterfaceAliasIpRangesList</a>

---

##### `accessConfigsInput`<sup>Optional</sup> <a name="accessConfigsInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.accessConfigsInput"></a>

```typescript
public readonly accessConfigsInput: IResolvable | ElastigroupGkeNetworkInterfaceAccessConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAccessConfigs">ElastigroupGkeNetworkInterfaceAccessConfigs</a>[]

---

##### `aliasIpRangesInput`<sup>Optional</sup> <a name="aliasIpRangesInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.aliasIpRangesInput"></a>

```typescript
public readonly aliasIpRangesInput: IResolvable | ElastigroupGkeNetworkInterfaceAliasIpRanges[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceAliasIpRanges">ElastigroupGkeNetworkInterfaceAliasIpRanges</a>[]

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeNetworkInterface;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeNetworkInterface">ElastigroupGkeNetworkInterface</a>

---


### ElastigroupGkeScalingDownPolicyDimensionsList <a name="ElastigroupGkeScalingDownPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.get"></a>

```typescript
public get(index: number): ElastigroupGkeScalingDownPolicyDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeScalingDownPolicyDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>[]

---


### ElastigroupGkeScalingDownPolicyDimensionsOutputReference <a name="ElastigroupGkeScalingDownPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeScalingDownPolicyDimensions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>

---


### ElastigroupGkeScalingDownPolicyList <a name="ElastigroupGkeScalingDownPolicyList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeScalingDownPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.get"></a>

```typescript
public get(index: number): ElastigroupGkeScalingDownPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeScalingDownPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>[]

---


### ElastigroupGkeScalingDownPolicyOutputReference <a name="ElastigroupGkeScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | ElastigroupGkeScalingDownPolicyDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>[]

---

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetActionType"></a>

```typescript
public resetActionType(): void
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetAdjustment"></a>

```typescript
public resetAdjustment(): void
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetCooldown"></a>

```typescript
public resetCooldown(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList">ElastigroupGkeScalingDownPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: ElastigroupGkeScalingDownPolicyDimensionsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensionsList">ElastigroupGkeScalingDownPolicyDimensionsList</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.adjustmentInput"></a>

```typescript
public readonly adjustmentInput: number;
```

- *Type:* number

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.cooldownInput"></a>

```typescript
public readonly cooldownInput: number;
```

- *Type:* number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | ElastigroupGkeScalingDownPolicyDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyDimensions">ElastigroupGkeScalingDownPolicyDimensions</a>[]

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.adjustment"></a>

```typescript
public readonly adjustment: number;
```

- *Type:* number

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeScalingDownPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingDownPolicy">ElastigroupGkeScalingDownPolicy</a>

---


### ElastigroupGkeScalingUpPolicyDimensionsList <a name="ElastigroupGkeScalingUpPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.get"></a>

```typescript
public get(index: number): ElastigroupGkeScalingUpPolicyDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeScalingUpPolicyDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>[]

---


### ElastigroupGkeScalingUpPolicyDimensionsOutputReference <a name="ElastigroupGkeScalingUpPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeScalingUpPolicyDimensions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>

---


### ElastigroupGkeScalingUpPolicyList <a name="ElastigroupGkeScalingUpPolicyList" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeScalingUpPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.get"></a>

```typescript
public get(index: number): ElastigroupGkeScalingUpPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeScalingUpPolicy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>[]

---


### ElastigroupGkeScalingUpPolicyOutputReference <a name="ElastigroupGkeScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer"></a>

```typescript
import { elastigroupGke } from '@cdktf/provider-spotinst'

new elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetAdjustment">resetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetCooldown">resetCooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetEvaluationPeriods">resetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | ElastigroupGkeScalingUpPolicyDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>[]

---

##### `resetActionType` <a name="resetActionType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetActionType"></a>

```typescript
public resetActionType(): void
```

##### `resetAdjustment` <a name="resetAdjustment" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetAdjustment"></a>

```typescript
public resetAdjustment(): void
```

##### `resetCooldown` <a name="resetCooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetCooldown"></a>

```typescript
public resetCooldown(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetEvaluationPeriods` <a name="resetEvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetEvaluationPeriods"></a>

```typescript
public resetEvaluationPeriods(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList">ElastigroupGkeScalingUpPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.adjustmentInput">adjustmentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.cooldownInput">cooldownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.evaluationPeriodsInput">evaluationPeriodsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.adjustment">adjustment</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.cooldown">cooldown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: ElastigroupGkeScalingUpPolicyDimensionsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensionsList">ElastigroupGkeScalingUpPolicyDimensionsList</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `adjustmentInput`<sup>Optional</sup> <a name="adjustmentInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.adjustmentInput"></a>

```typescript
public readonly adjustmentInput: number;
```

- *Type:* number

---

##### `cooldownInput`<sup>Optional</sup> <a name="cooldownInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.cooldownInput"></a>

```typescript
public readonly cooldownInput: number;
```

- *Type:* number

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | ElastigroupGkeScalingUpPolicyDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyDimensions">ElastigroupGkeScalingUpPolicyDimensions</a>[]

---

##### `evaluationPeriodsInput`<sup>Optional</sup> <a name="evaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```typescript
public readonly evaluationPeriodsInput: number;
```

- *Type:* number

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `adjustment`<sup>Required</sup> <a name="adjustment" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.adjustment"></a>

```typescript
public readonly adjustment: number;
```

- *Type:* number

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.cooldown"></a>

```typescript
public readonly cooldown: number;
```

- *Type:* number

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupGkeScalingUpPolicy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupGke.ElastigroupGkeScalingUpPolicy">ElastigroupGkeScalingUpPolicy</a>

---



