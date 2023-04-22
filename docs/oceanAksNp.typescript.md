# `spotinst_ocean_aks_np`

Refer to the Terraform Registory for docs: [`spotinst_ocean_aks_np`](https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np).

# `oceanAksNp` Submodule <a name="`oceanAksNp` Submodule" id="@cdktf/provider-spotinst.oceanAksNp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAksNp <a name="OceanAksNp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np spotinst_ocean_aks_np}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

new oceanAksNp.OceanAksNp(scope: Construct, id: string, config: OceanAksNpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig">OceanAksNpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig">OceanAksNpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler">putAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth">putHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAutoscaler">resetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetControllerClusterId">resetControllerClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetEnableNodePublicIp">resetEnableNodePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFallbackToOndemand">resetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHealth">resetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxCount">resetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxPodsPerNode">resetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMinCount">resetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskSizeGb">resetOsDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskType">resetOsDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetSpotPercentage">resetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTaints">resetTaints</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAutoscaler` <a name="putAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler"></a>

```typescript
public putAutoscaler(value: OceanAksNpAutoscaler): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---

##### `putHealth` <a name="putHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth"></a>

```typescript
public putHealth(value: OceanAksNpHealth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints"></a>

```typescript
public putTaints(value: IResolvable | OceanAksNpTaints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>[]

---

##### `resetAutoscaler` <a name="resetAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAutoscaler"></a>

```typescript
public resetAutoscaler(): void
```

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAvailabilityZones"></a>

```typescript
public resetAvailabilityZones(): void
```

##### `resetControllerClusterId` <a name="resetControllerClusterId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetControllerClusterId"></a>

```typescript
public resetControllerClusterId(): void
```

##### `resetEnableNodePublicIp` <a name="resetEnableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetEnableNodePublicIp"></a>

```typescript
public resetEnableNodePublicIp(): void
```

##### `resetFallbackToOndemand` <a name="resetFallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFallbackToOndemand"></a>

```typescript
public resetFallbackToOndemand(): void
```

##### `resetHealth` <a name="resetHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHealth"></a>

```typescript
public resetHealth(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaxCount` <a name="resetMaxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxCount"></a>

```typescript
public resetMaxCount(): void
```

##### `resetMaxPodsPerNode` <a name="resetMaxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxPodsPerNode"></a>

```typescript
public resetMaxPodsPerNode(): void
```

##### `resetMinCount` <a name="resetMinCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMinCount"></a>

```typescript
public resetMinCount(): void
```

##### `resetOsDiskSizeGb` <a name="resetOsDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskSizeGb"></a>

```typescript
public resetOsDiskSizeGb(): void
```

##### `resetOsDiskType` <a name="resetOsDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskType"></a>

```typescript
public resetOsDiskType(): void
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsType"></a>

```typescript
public resetOsType(): void
```

##### `resetSpotPercentage` <a name="resetSpotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetSpotPercentage"></a>

```typescript
public resetSpotPercentage(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTaints"></a>

```typescript
public resetTaints(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

oceanAksNp.OceanAksNp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

oceanAksNp.OceanAksNp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

oceanAksNp.OceanAksNp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference">OceanAksNpAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.health">health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference">OceanAksNpHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList">OceanAksNpTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterNameInput">aksClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupNameInput">aksInfrastructureResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegionInput">aksRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupNameInput">aksResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscalerInput">autoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterIdInput">controllerClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIpInput">enableNodePublicIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemandInput">fallbackToOndemandInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.healthInput">healthInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCountInput">maxCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCountInput">minCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGbInput">osDiskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskTypeInput">osDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osTypeInput">osTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentageInput">spotPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterName">aksClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupName">aksInfrastructureResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegion">aksRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupName">aksResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterId">controllerClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIp">enableNodePublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCount">maxCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCount">minCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGb">osDiskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskType">osDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentage">spotPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaler`<sup>Required</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscaler"></a>

```typescript
public readonly autoscaler: OceanAksNpAutoscalerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference">OceanAksNpAutoscalerOutputReference</a>

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.health"></a>

```typescript
public readonly health: OceanAksNpHealthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference">OceanAksNpHealthOutputReference</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taints"></a>

```typescript
public readonly taints: OceanAksNpTaintsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList">OceanAksNpTaintsList</a>

---

##### `aksClusterNameInput`<sup>Optional</sup> <a name="aksClusterNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterNameInput"></a>

```typescript
public readonly aksClusterNameInput: string;
```

- *Type:* string

---

##### `aksInfrastructureResourceGroupNameInput`<sup>Optional</sup> <a name="aksInfrastructureResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupNameInput"></a>

```typescript
public readonly aksInfrastructureResourceGroupNameInput: string;
```

- *Type:* string

---

##### `aksRegionInput`<sup>Optional</sup> <a name="aksRegionInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegionInput"></a>

```typescript
public readonly aksRegionInput: string;
```

- *Type:* string

---

##### `aksResourceGroupNameInput`<sup>Optional</sup> <a name="aksResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupNameInput"></a>

```typescript
public readonly aksResourceGroupNameInput: string;
```

- *Type:* string

---

##### `autoscalerInput`<sup>Optional</sup> <a name="autoscalerInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscalerInput"></a>

```typescript
public readonly autoscalerInput: OceanAksNpAutoscaler;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZonesInput"></a>

```typescript
public readonly availabilityZonesInput: string[];
```

- *Type:* string[]

---

##### `controllerClusterIdInput`<sup>Optional</sup> <a name="controllerClusterIdInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterIdInput"></a>

```typescript
public readonly controllerClusterIdInput: string;
```

- *Type:* string

---

##### `enableNodePublicIpInput`<sup>Optional</sup> <a name="enableNodePublicIpInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIpInput"></a>

```typescript
public readonly enableNodePublicIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fallbackToOndemandInput`<sup>Optional</sup> <a name="fallbackToOndemandInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemandInput"></a>

```typescript
public readonly fallbackToOndemandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthInput`<sup>Optional</sup> <a name="healthInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.healthInput"></a>

```typescript
public readonly healthInput: OceanAksNpHealth;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxCountInput`<sup>Optional</sup> <a name="maxCountInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCountInput"></a>

```typescript
public readonly maxCountInput: number;
```

- *Type:* number

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNodeInput"></a>

```typescript
public readonly maxPodsPerNodeInput: number;
```

- *Type:* number

---

##### `minCountInput`<sup>Optional</sup> <a name="minCountInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCountInput"></a>

```typescript
public readonly minCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osDiskSizeGbInput`<sup>Optional</sup> <a name="osDiskSizeGbInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGbInput"></a>

```typescript
public readonly osDiskSizeGbInput: number;
```

- *Type:* number

---

##### `osDiskTypeInput`<sup>Optional</sup> <a name="osDiskTypeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskTypeInput"></a>

```typescript
public readonly osDiskTypeInput: string;
```

- *Type:* string

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osTypeInput"></a>

```typescript
public readonly osTypeInput: string;
```

- *Type:* string

---

##### `spotPercentageInput`<sup>Optional</sup> <a name="spotPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentageInput"></a>

```typescript
public readonly spotPercentageInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | OceanAksNpTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>[]

---

##### `aksClusterName`<sup>Required</sup> <a name="aksClusterName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterName"></a>

```typescript
public readonly aksClusterName: string;
```

- *Type:* string

---

##### `aksInfrastructureResourceGroupName`<sup>Required</sup> <a name="aksInfrastructureResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupName"></a>

```typescript
public readonly aksInfrastructureResourceGroupName: string;
```

- *Type:* string

---

##### `aksRegion`<sup>Required</sup> <a name="aksRegion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegion"></a>

```typescript
public readonly aksRegion: string;
```

- *Type:* string

---

##### `aksResourceGroupName`<sup>Required</sup> <a name="aksResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupName"></a>

```typescript
public readonly aksResourceGroupName: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `controllerClusterId`<sup>Required</sup> <a name="controllerClusterId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterId"></a>

```typescript
public readonly controllerClusterId: string;
```

- *Type:* string

---

##### `enableNodePublicIp`<sup>Required</sup> <a name="enableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIp"></a>

```typescript
public readonly enableNodePublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fallbackToOndemand`<sup>Required</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemand"></a>

```typescript
public readonly fallbackToOndemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

---

##### `minCount`<sup>Required</sup> <a name="minCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCount"></a>

```typescript
public readonly minCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osDiskSizeGb`<sup>Required</sup> <a name="osDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGb"></a>

```typescript
public readonly osDiskSizeGb: number;
```

- *Type:* number

---

##### `osDiskType`<sup>Required</sup> <a name="osDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskType"></a>

```typescript
public readonly osDiskType: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `spotPercentage`<sup>Required</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentage"></a>

```typescript
public readonly spotPercentage: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAksNpAutoscaler <a name="OceanAksNpAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

const oceanAksNpAutoscaler: oceanAksNp.OceanAksNpAutoscaler = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#autoscale_is_enabled OceanAksNp#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | resource_limits block. |

---

##### `autoscaleDown`<sup>Optional</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleDown"></a>

```typescript
public readonly autoscaleDown: OceanAksNpAutoscalerAutoscaleDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#autoscale_down OceanAksNp#autoscale_down}

---

##### `autoscaleHeadroom`<sup>Optional</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleHeadroom"></a>

```typescript
public readonly autoscaleHeadroom: OceanAksNpAutoscalerAutoscaleHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#autoscale_headroom OceanAksNp#autoscale_headroom}

---

##### `autoscaleIsEnabled`<sup>Optional</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleIsEnabled"></a>

```typescript
public readonly autoscaleIsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#autoscale_is_enabled OceanAksNp#autoscale_is_enabled}.

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.resourceLimits"></a>

```typescript
public readonly resourceLimits: OceanAksNpAutoscalerResourceLimits;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#resource_limits OceanAksNp#resource_limits}

---

### OceanAksNpAutoscalerAutoscaleDown <a name="OceanAksNpAutoscalerAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

const oceanAksNpAutoscalerAutoscaleDown: oceanAksNp.OceanAksNpAutoscalerAutoscaleDown = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#max_scale_down_percentage OceanAksNp#max_scale_down_percentage}. |

---

##### `maxScaleDownPercentage`<sup>Optional</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.property.maxScaleDownPercentage"></a>

```typescript
public readonly maxScaleDownPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#max_scale_down_percentage OceanAksNp#max_scale_down_percentage}.

---

### OceanAksNpAutoscalerAutoscaleHeadroom <a name="OceanAksNpAutoscalerAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

const oceanAksNpAutoscalerAutoscaleHeadroom: oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.property.automatic">automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | automatic block. |

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.property.automatic"></a>

```typescript
public readonly automatic: OceanAksNpAutoscalerAutoscaleHeadroomAutomatic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#automatic OceanAksNp#automatic}

---

### OceanAksNpAutoscalerAutoscaleHeadroomAutomatic <a name="OceanAksNpAutoscalerAutoscaleHeadroomAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

const oceanAksNpAutoscalerAutoscaleHeadroomAutomatic: oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.percentage">percentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#percentage OceanAksNp#percentage}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#percentage OceanAksNp#percentage}.

---

### OceanAksNpAutoscalerResourceLimits <a name="OceanAksNpAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

const oceanAksNpAutoscalerResourceLimits: oceanAksNp.OceanAksNpAutoscalerResourceLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxMemoryGib">maxMemoryGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxVcpu">maxVcpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}. |

---

##### `maxMemoryGib`<sup>Optional</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxMemoryGib"></a>

```typescript
public readonly maxMemoryGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}.

---

##### `maxVcpu`<sup>Optional</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxVcpu"></a>

```typescript
public readonly maxVcpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}.

---

### OceanAksNpConfig <a name="OceanAksNpConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

const oceanAksNpConfig: oceanAksNp.OceanAksNpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksClusterName">aksClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksInfrastructureResourceGroupName">aksInfrastructureResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksRegion">aksRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#aks_region OceanAksNp#aks_region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksResourceGroupName">aksResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#name OceanAksNp#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#availability_zones OceanAksNp#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.controllerClusterId">controllerClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.enableNodePublicIp">enableNodePublicIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.health">health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#id OceanAksNp#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#labels OceanAksNp#labels}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxCount">maxCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#max_count OceanAksNp#max_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.minCount">minCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#min_count OceanAksNp#min_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskSizeGb">osDiskSizeGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskType">osDiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osType">osType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#os_type OceanAksNp#os_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.spotPercentage">spotPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#tags OceanAksNp#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>[]</code> | taints block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aksClusterName`<sup>Required</sup> <a name="aksClusterName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksClusterName"></a>

```typescript
public readonly aksClusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}.

---

##### `aksInfrastructureResourceGroupName`<sup>Required</sup> <a name="aksInfrastructureResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksInfrastructureResourceGroupName"></a>

```typescript
public readonly aksInfrastructureResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}.

---

##### `aksRegion`<sup>Required</sup> <a name="aksRegion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksRegion"></a>

```typescript
public readonly aksRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#aks_region OceanAksNp#aks_region}.

---

##### `aksResourceGroupName`<sup>Required</sup> <a name="aksResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksResourceGroupName"></a>

```typescript
public readonly aksResourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#name OceanAksNp#name}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.autoscaler"></a>

```typescript
public readonly autoscaler: OceanAksNpAutoscaler;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#autoscaler OceanAksNp#autoscaler}

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#availability_zones OceanAksNp#availability_zones}.

---

##### `controllerClusterId`<sup>Optional</sup> <a name="controllerClusterId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.controllerClusterId"></a>

```typescript
public readonly controllerClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}.

---

##### `enableNodePublicIp`<sup>Optional</sup> <a name="enableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.enableNodePublicIp"></a>

```typescript
public readonly enableNodePublicIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}.

---

##### `fallbackToOndemand`<sup>Optional</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.fallbackToOndemand"></a>

```typescript
public readonly fallbackToOndemand: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}.

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.health"></a>

```typescript
public readonly health: OceanAksNpHealth;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#health OceanAksNp#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#id OceanAksNp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#labels OceanAksNp#labels}.

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#max_count OceanAksNp#max_count}.

---

##### `maxPodsPerNode`<sup>Optional</sup> <a name="maxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}.

---

##### `minCount`<sup>Optional</sup> <a name="minCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.minCount"></a>

```typescript
public readonly minCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#min_count OceanAksNp#min_count}.

---

##### `osDiskSizeGb`<sup>Optional</sup> <a name="osDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskSizeGb"></a>

```typescript
public readonly osDiskSizeGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}.

---

##### `osDiskType`<sup>Optional</sup> <a name="osDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskType"></a>

```typescript
public readonly osDiskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#os_type OceanAksNp#os_type}.

---

##### `spotPercentage`<sup>Optional</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.spotPercentage"></a>

```typescript
public readonly spotPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#tags OceanAksNp#tags}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.taints"></a>

```typescript
public readonly taints: IResolvable | OceanAksNpTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#taints OceanAksNp#taints}

---

### OceanAksNpHealth <a name="OceanAksNpHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

const oceanAksNpHealth: oceanAksNp.OceanAksNpHealth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.property.gracePeriod">gracePeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#grace_period OceanAksNp#grace_period}. |

---

##### `gracePeriod`<sup>Optional</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#grace_period OceanAksNp#grace_period}.

---

### OceanAksNpTaints <a name="OceanAksNpTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

const oceanAksNpTaints: oceanAksNp.OceanAksNpTaints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.effect">effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#effect OceanAksNp#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#key OceanAksNp#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#value OceanAksNp#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#effect OceanAksNp#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#key OceanAksNp#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.113.0/docs/resources/ocean_aks_np#value OceanAksNp#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAksNpAutoscalerAutoscaleDownOutputReference <a name="OceanAksNpAutoscalerAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

new oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage">resetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxScaleDownPercentage` <a name="resetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```typescript
public resetMaxScaleDownPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">maxScaleDownPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxScaleDownPercentageInput`<sup>Optional</sup> <a name="maxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```typescript
public readonly maxScaleDownPercentageInput: number;
```

- *Type:* number

---

##### `maxScaleDownPercentage`<sup>Required</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```typescript
public readonly maxScaleDownPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAksNpAutoscalerAutoscaleDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---


### OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference <a name="OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

new oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage"></a>

```typescript
public resetPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput">percentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput"></a>

```typescript
public readonly percentageInput: number;
```

- *Type:* number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAksNpAutoscalerAutoscaleHeadroomAutomatic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---


### OceanAksNpAutoscalerAutoscaleHeadroomOutputReference <a name="OceanAksNpAutoscalerAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

new oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic">putAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic">resetAutomatic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomatic` <a name="putAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic"></a>

```typescript
public putAutomatic(value: OceanAksNpAutoscalerAutoscaleHeadroomAutomatic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `resetAutomatic` <a name="resetAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic"></a>

```typescript
public resetAutomatic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automatic">automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput">automaticInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automatic"></a>

```typescript
public readonly automatic: OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference</a>

---

##### `automaticInput`<sup>Optional</sup> <a name="automaticInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput"></a>

```typescript
public readonly automaticInput: OceanAksNpAutoscalerAutoscaleHeadroomAutomatic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAksNpAutoscalerAutoscaleHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---


### OceanAksNpAutoscalerOutputReference <a name="OceanAksNpAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

new oceanAksNp.OceanAksNpAutoscalerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown">putAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom">putAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits">putResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleDown">resetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleHeadroom">resetAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleIsEnabled">resetAutoscaleIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetResourceLimits">resetResourceLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscaleDown` <a name="putAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown"></a>

```typescript
public putAutoscaleDown(value: OceanAksNpAutoscalerAutoscaleDown): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---

##### `putAutoscaleHeadroom` <a name="putAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom"></a>

```typescript
public putAutoscaleHeadroom(value: OceanAksNpAutoscalerAutoscaleHeadroom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---

##### `putResourceLimits` <a name="putResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits"></a>

```typescript
public putResourceLimits(value: OceanAksNpAutoscalerResourceLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---

##### `resetAutoscaleDown` <a name="resetAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleDown"></a>

```typescript
public resetAutoscaleDown(): void
```

##### `resetAutoscaleHeadroom` <a name="resetAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleHeadroom"></a>

```typescript
public resetAutoscaleHeadroom(): void
```

##### `resetAutoscaleIsEnabled` <a name="resetAutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleIsEnabled"></a>

```typescript
public resetAutoscaleIsEnabled(): void
```

##### `resetResourceLimits` <a name="resetResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetResourceLimits"></a>

```typescript
public resetResourceLimits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference">OceanAksNpAutoscalerAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference">OceanAksNpAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDownInput">autoscaleDownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroomInput">autoscaleHeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabledInput">autoscaleIsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimitsInput">resourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscaleDown`<sup>Required</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDown"></a>

```typescript
public readonly autoscaleDown: OceanAksNpAutoscalerAutoscaleDownOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference">OceanAksNpAutoscalerAutoscaleDownOutputReference</a>

---

##### `autoscaleHeadroom`<sup>Required</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroom"></a>

```typescript
public readonly autoscaleHeadroom: OceanAksNpAutoscalerAutoscaleHeadroomOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomOutputReference</a>

---

##### `resourceLimits`<sup>Required</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimits"></a>

```typescript
public readonly resourceLimits: OceanAksNpAutoscalerResourceLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference">OceanAksNpAutoscalerResourceLimitsOutputReference</a>

---

##### `autoscaleDownInput`<sup>Optional</sup> <a name="autoscaleDownInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDownInput"></a>

```typescript
public readonly autoscaleDownInput: OceanAksNpAutoscalerAutoscaleDown;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---

##### `autoscaleHeadroomInput`<sup>Optional</sup> <a name="autoscaleHeadroomInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroomInput"></a>

```typescript
public readonly autoscaleHeadroomInput: OceanAksNpAutoscalerAutoscaleHeadroom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---

##### `autoscaleIsEnabledInput`<sup>Optional</sup> <a name="autoscaleIsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabledInput"></a>

```typescript
public readonly autoscaleIsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceLimitsInput`<sup>Optional</sup> <a name="resourceLimitsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimitsInput"></a>

```typescript
public readonly resourceLimitsInput: OceanAksNpAutoscalerResourceLimits;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---

##### `autoscaleIsEnabled`<sup>Required</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabled"></a>

```typescript
public readonly autoscaleIsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAksNpAutoscaler;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---


### OceanAksNpAutoscalerResourceLimitsOutputReference <a name="OceanAksNpAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

new oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">resetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxVcpu">resetMaxVcpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxMemoryGib` <a name="resetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```typescript
public resetMaxMemoryGib(): void
```

##### `resetMaxVcpu` <a name="resetMaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```typescript
public resetMaxVcpu(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">maxMemoryGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">maxVcpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">maxMemoryGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpu">maxVcpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxMemoryGibInput`<sup>Optional</sup> <a name="maxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```typescript
public readonly maxMemoryGibInput: number;
```

- *Type:* number

---

##### `maxVcpuInput`<sup>Optional</sup> <a name="maxVcpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```typescript
public readonly maxVcpuInput: number;
```

- *Type:* number

---

##### `maxMemoryGib`<sup>Required</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```typescript
public readonly maxMemoryGib: number;
```

- *Type:* number

---

##### `maxVcpu`<sup>Required</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```typescript
public readonly maxVcpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAksNpAutoscalerResourceLimits;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---


### OceanAksNpHealthOutputReference <a name="OceanAksNpHealthOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

new oceanAksNp.OceanAksNpHealthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resetGracePeriod">resetGracePeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGracePeriod` <a name="resetGracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resetGracePeriod"></a>

```typescript
public resetGracePeriod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriodInput">gracePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriod">gracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gracePeriodInput`<sup>Optional</sup> <a name="gracePeriodInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriodInput"></a>

```typescript
public readonly gracePeriodInput: number;
```

- *Type:* number

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAksNpHealth;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---


### OceanAksNpTaintsList <a name="OceanAksNpTaintsList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

new oceanAksNp.OceanAksNpTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get"></a>

```typescript
public get(index: number): OceanAksNpTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceanAksNpTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a>[]

---


### OceanAksNpTaintsOutputReference <a name="OceanAksNpTaintsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer"></a>

```typescript
import { oceanAksNp } from '@cdktf/provider-spotinst'

new oceanAksNp.OceanAksNpTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanAksNpTaints | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints">OceanAksNpTaints</a> | cdktf.IResolvable

---



